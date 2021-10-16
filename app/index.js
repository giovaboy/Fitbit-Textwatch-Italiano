import { display } from "display";
import { me } from "appbit";
//import { memory } from "system";

import myClock from './myClock';
import DateUpdater from './date';
import BatteryUpdater from './battery';
import HealthMonitor from './activity';
import Animator from './animator';
import SettingsManager from './userSettings';
import DomHelper from './dom';

import NumberToText from '../common/numberToText';
import * as util from "../common/utils";

const domHelper = new DomHelper();
const animator = new Animator(domHelper);

const settingsManager = new SettingsManager(domHelper);
const dateUpdater = new DateUpdater(domHelper);
const batteryUpdater = new BatteryUpdater(domHelper, settingsManager);
const healthData = new HealthMonitor(domHelper);

const onClockTick = (date) => {
  if (!display.aodActive && display.on) {
    dateUpdater.updateDate(date);
    batteryUpdater.updateBattery();
    healthData.updateHealth();
  }
    //console.log("JS memory: " + memory.js.peak + " - " + memory.js.used + "/" + memory.js.total);
    //memory.onmemorypressurechange = function(a) {

     // console.log("memoryPressureChange:" + JSON.stringify(a));

   // }
}

let clock = new myClock(onClockTick, animator, domHelper, settingsManager);

  } else {
    console.log('no peerSocket connection');
  }
}

if (me.launchReasons.settingsChanged) {
  console.log('settings changed without companion');
  updateAll();
}/   console.info(`Setting default for ${KEY_BACKGROUND}`);
//   settingsStorage.setItem(KEY_BACKGROUND, JSON.stringify('#000000'));
// }
// console.log(settingsStorage.getItem(KEY_FOREGROUND));
// if (!settingsStorage.getItem(KEY_FOREGROUND)) {
//   console.info(`Setting default for ${KEY_FOREGROUND}`);
//   settingsStorage.setItem(KEY_FOREGROUND, JSON.stringify('#FFFFFF'));
// }
// console.log(settingsStorage.getItem(KEY_SHOW_BATTERY));
// if (!settingsStorage.getItem(KEY_SHOW_BATTERY)) {
//   console.info(`Setting default for ${KEY_SHOW_BATTERY}`);
//   settingsStorage.setItem(KEY_SHOW_BATTERY, true);
// }
// console.log(settingsStorage.getItem(KEY_DIM_BATTERY));
// if (!settingsStorage.getItem(KEY_DIM_BATTERY)) {
//   console.info(`Setting default for ${KEY_DIM_BATTERY}`);
//   settingsStorage.setItem(KEY_DIM_BATTERY, true);
// }

if (me.launchReasons.settingsChanged) {
  console.log('settings changed without companion');
  updateAll();
}

// messaging.peerSocket.onmessage = (evt) => {
//   console.info(JSON.stringify(evt));
//   switch (evt.data.key) {
//     case 'INIT':
//       if (messaging.peerSocket.readyState == messaging.peerSocket.OPEN) {
//         console.info('calling update');
//         updateAll();
//       } else {
//         console.info('setting listener');
//         messaging.peerSocket.onopen = updateAll;        
//       }
//   }
// }