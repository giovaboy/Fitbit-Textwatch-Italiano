import { display } from "display";

import myClock from "./myClock";
import DateUpdater from "./date";
import BatteryUpdater from "./battery";
import HeartMonitor from "./heart";
import Animator from "./animator";
import Health from "./health";
import SettingsManager from "./userSettings";
import DomHelper from "./dom";

const domHelper = new DomHelper();
const animator = new Animator(domHelper);

const settingsManager = new SettingsManager(domHelper);
const dateUpdater = new DateUpdater(domHelper);
const batteryUpdater = new BatteryUpdater(domHelper, settingsManager);
const heartData = new HeartMonitor(domHelper);
const healthData = new Health(domHelper);


const onClockTick = (date) => {
  if (!display.aodActive && display.on) {
    heartData.updateHeart();
    healthData.updateHealthData();
  }
  /*
    console.log("JS memory: " + memory.js.peak + " - " + memory.js.used + "/" + memory.js.total);
    memory.onmemorypressurechange = function(a) {
      console.log("memoryPressureChange:" + JSON.stringify(a));
    }
  */
}

const clock = new myClock(onClockTick, animator, domHelper, dateUpdater, settingsManager);
