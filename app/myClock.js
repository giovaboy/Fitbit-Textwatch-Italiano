import clock from "clock";
import { display } from "display";
import { me } from "appbit";
import document from 'document';
import {preferences} from "user-settings";
import NumberToText from '../common/numberToText';
import * as util from "../common/utils";

const DEBUG = false;

export default class myClock {
  
  constructor(callback, animator, domHelper) {
    clock.granularity = 'minutes';
    clock.ontick = () => {
      this.doTick();
    };

    this.isFresh = true;
    this.callback = callback;
    this.animator = animator;
    this.domHelper = domHelper;
  }
/*
  forceUpdate() {
    this.isFresh = true;
    this.doTick();
  }
*/
  doTick(event) {
    //if (DEBUG) console.log(this.isFresh);
    //if (DEBUG) console.log(this.callback);
    let today = event ? event.date : new Date();
    // Now
    let hourInt = today.getHours();
    let minuteInt = today.getMinutes();
    
    if (preferences.clockDisplay === "12h") {
      hourInt = hourInt % 12 || 12;
    } 

    let currentHourString = NumberToText.getHour(hourInt);
    let currentMinuteParts = NumberToText.getMinutes(minuteInt).split(' ');

    // Setup next values for animations    
    this.domHelper.hoursNext.text = currentHourString;
    this.domHelper.tensNext.text = currentMinuteParts[0] +' ' + currentMinuteParts[1];
    this.domHelper.minutesNext.text = currentMinuteParts[2] || '';    
    this.domHelper.minutesBNext.text = currentMinuteParts[2] || '';
   
    /*
    if (DEBUG) {
      console.log("root_Width: " + this.domHelper.root.width);
      console.log("hoursNext_Width: " + this.domHelper.hoursNext.getBBox().width);
      console.log("tensNext_Width: " + this.domHelper.tensNext.getBBox().width);
      console.log("minutesNext_Width: " + this.domHelper.minutesNext.getBBox().width);
      console.log("minutesBNext_Width: " + this.domHelper.minutesBNext.getBBox().width);
    }
    
    let rootW = this.domHelper.root.width;
    
    if (this.domHelper.hoursNext.getBBox().width > rootW) {
      util.changeFontSize(this.domHelper.hoursNext,-6);
    } else {this.domHelper.hoursNext.style.fontSyze = 58}
    if (this.domHelper.tensNext.getBBox().width > rootW) {
      util.changeFontSize(this.domHelper.tensNext,-6);
    } else {this.domHelper.tensNext.style.fontSyze = 58}
    if (this.domHelper.minutesNext.getBBox().width > rootW) {
      util.changeFontSize(this.domHelper.minutesNext,-6);
    } else {}
    if (this.domHelper.minutesBNext.getBBox().width > rootW) {
      util.changeFontSize(this.domHelper.minutesBNext,-6);
    } else {}
    
    */
    
    if (display.aodAvailable && me.permissions.granted("access_aod")) {
      // tell the system we support AOD
      display.aodAllowed = true;
      display.addEventListener("change", () => {
        // Is the display on?
        if (!display.aodActive && display.on) {
  
        } else {
          this.isFresh = true;
        }
      });
    } else {
      display.addEventListener("change", () => {
      // Is the display on?
        if (display.on) {
          if (DEBUG) console.log("display is on");
        } else {
          this.isFresh = true;
        }
      });
    } 
    
    if ( this.isFresh ) {
      // Skip animation
      this.domHelper.hours.text = currentHourString;
      this.domHelper.tens.text = currentMinuteParts[0] + ' ' + currentMinuteParts[1];
      this.domHelper.minutes.text = currentMinuteParts[2] || '';
      this.domHelper.minutesB.text = currentMinuteParts[2] || '';
     // if (DEBUG) { this.domHelper.minutesB.text = secInt; }
      this.isFresh = false;
    } else {
      // Setup animation
      this.animator.handleTimeChange();
    }

    if (this.callback) {
        this.callback(today);
    }
  }
}