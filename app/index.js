import { display } from "display";
//import { me } from "appbit";
//import { memory } from "system";

import myClock from './myClock';
import DateUpdater from './date';
import BatteryUpdater from './battery';
import HealthMonitor from './activity';
import Animator from './animator';
import SettingsManager from './userSettings';
import DomHelper from './dom';

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

const clock = new myClock(onClockTick, animator, domHelper, settingsManager);
