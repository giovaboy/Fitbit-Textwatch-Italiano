import { display } from "display";
import { me } from "appbit";
import { memory } from "system";

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
const healthData = new HealthMonitor(domHelper);
const dateUpdater = new DateUpdater(domHelper);
const settingsManager = new SettingsManager(domHelper);
const batteryUpdater = new BatteryUpdater(domHelper, settingsManager);

const onClockTick = (date) => {
    // Populate metadata
    dateUpdater.updateDate(date);
    batteryUpdater.updateBattery();
    healthData.updateHealth();//date);
    //console.log("JS memory: " + memory.js.peak + " - " + memory.js.used + "/" + memory.js.total);
}

let clock = new myClock(onClockTick, animator, domHelper, settingsManager, batteryUpdater);

he display on?
    if (!display.aodActive && display.on) {
     // body.start();
      //hrm.start();
      clock.granularity = "minutes";
    //  clockController.weather.updateWeather();
      aod=false;
    } else {
     // body.stop();
      //hrm.stop();
     // clock.granularity = "minutes";
      aod = true;
    }
  });
} else {
  // respond to display change events
  display.addEventListener("change", () => {
    // Is the display on?
    if (display.on) {
      //body.start();
     // hrm.start();
      clock.granularity = "minutes";
aod = false;
      //clockController.weather.updateWeather();
    } else {
      aod=true;
     // body.stop();
      //hrm.stop();
      //clock.granularity = "minutes";
    }
  });
}
*/
const clock = new myClock(onClockTick, new Animator(domHelper), domHelper);

