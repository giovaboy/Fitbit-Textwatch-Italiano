import myClock from './myClock';
import DateUpdater from './date';
import BatteryUpdater from './battery';
import HealthMonitor from './activity';
import Animator from './animator';
import SettingsManager from './userSettings';
import DomHelper from './dom';
import { display } from "display";
import { me } from "appbit";

import NumberToText from '../common/numberToText';
import * as util from "../common/utils";

const domHelper = new DomHelper();
const healthData = new HealthMonitor(domHelper);
const dateUpdater = new DateUpdater(domHelper);
const settingsManager = new SettingsManager(domHelper);
const batteryUpdater = new BatteryUpdater(domHelper, settingsManager);

const onClockTick = (date) => {
    // Populate metadata
    dateUpdater.updateDate(date);
    batteryUpdater.updateBattery();
    healthData.updateHealth(date);
}
/*
let aod = false;

if (display.aodAvailable && me.permissions.granted("access_aod")) {
  // tell the system we support AOD
  display.aodAllowed = true;

  // respond to display change events
  display.addEventListener("change", () => {
    //switchDarkMode();

    // Is the display on?
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

