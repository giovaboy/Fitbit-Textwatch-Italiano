import { settingsStorage } from 'settings';
import { me } from 'companion';
import * as messaging from 'messaging';

const KEY_BACKGROUND = 'bgColor';
const KEY_FOREGROUND = 'fgColor';
const KEY_HEALTHCOLOR = 'healthColor';
const HOUR_FOREGROUND = 'hourColor';
const MIN_FOREGROUND = 'minColor';
const KEY_SHOW_BATTERY2 = 'showBattery2';

settingsStorage.onchange = (evt) => {
  console.log('settings onchange', JSON.stringify(evt));
  sendValue(evt.key, evt.newValue);
}

const sendValue = (key, val) => {
  console.info(key, val);
  if (val !== null) {
    sendSettingData({
      key: key,
      value: JSON.parse(val)
    });
  }
}

const updateAll = () => {
  sendValue(KEY_BACKGROUND, settingsStorage.getItem(KEY_BACKGROUND));
  sendValue(KEY_HEALTHCOLOR, settingsStorage.getItem(KEY_HEALTHCOLOR));
  sendValue(KEY_FOREGROUND, settingsStorage.getItem(KEY_FOREGROUND));
  sendValue(HOUR_FOREGROUND, settingsStorage.getItem(HOUR_FOREGROUND));
  sendValue(MIN_FOREGROUND, settingsStorage.getItem(MIN_FOREGROUND));
  sendValue(KEY_SHOW_BATTERY2, settingsStorage.getItem(KEY_SHOW_BATTERY2));
}

const sendSettingData = (data) => {
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send(data);
  } else {
    console.log('no peerSocket connection');
  }
}

if (me.launchReasons.settingsChanged) {
  console.log('settings changed without companion');
  updateAll();
}