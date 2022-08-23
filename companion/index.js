import { settingsStorage } from 'settings';
import { me } from 'companion';
import * as messaging from 'messaging';

const KEY_BACKGROUND = 'bgColor';
const KEY_HOURCOLOR = 'hourColor';
const KEY_MINCOLOR = 'minColor';
const KEY_DATECOLOR = 'dateColor';
const KEY_HEALTHCOLOR = 'healthColor';
const KEY_SHOW_BATTERY = 'showBattery';

settingsStorage.onchange = (evt) => {
  //console.log('settings onchange', JSON.stringify(evt));
  switch (evt.key) {
    case KEY_BACKGROUND:
    case KEY_HOURCOLOR:
    case KEY_MINCOLOR:
    case KEY_DATECOLOR:
    case KEY_HEALTHCOLOR:
    case KEY_SHOW_BATTERY:
      sendValue(evt.key, evt.newValue);
      break;
  }
}

function sendValue(key, val) {
  //console.info(key, val);
  if (val !== null) {
    sendSettingData({
      key: key,
      value: JSON.parse(val)
    });
  }
}

function updateAll() {
  sendValue(KEY_BACKGROUND, settingsStorage.getItem(KEY_BACKGROUND));
  sendValue(KEY_HOURCOLOR, settingsStorage.getItem(KEY_HOURCOLOR));
  sendValue(KEY_MINCOLOR, settingsStorage.getItem(KEY_MINCOLOR));
  sendValue(KEY_DATECOLOR, settingsStorage.getItem(KEY_DATECOLOR));
  sendValue(KEY_HEALTHCOLOR, settingsStorage.getItem(KEY_HEALTHCOLOR));
  sendValue(KEY_SHOW_BATTERY, settingsStorage.getItem(KEY_SHOW_BATTERY));
}

function sendSettingData(data) {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send(data);
  }
}

if (me.launchReasons.settingsChanged) {
  //console.log('settings changed without companion');
  updateAll();
}