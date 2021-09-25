import clock from "clock";
import document from 'document';
import {preferences} from "user-settings";
import NumberToText from '../common/numberToText';
import * as util from "../common/utils";

const DEBUG = true;
var isFresh=true;
export default class myClock {
  
  constructor(callback, animator, domHelper) {
    clock.granularity = 'minutes';
    clock.ontick = () => {
      this.doTick();
    };

    //this.isFresh = true;
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
    if (DEBUG) console.log(isFresh);
    //if (DEBUG) console.log(callback);
    let today = event ? event.date : new Date();
    // Now
    let hourInt = today.getHours();
    let minuteInt = today.getMinutes();
    let secInt = today.getSeconds();
    // Next
   // let nextHour = util.addMinutes(today,1).getHours();
  //  let nextMinutes = util.addMinutes(today,1).getMinutes();

    if (preferences.clockDisplay === "12h") {
      hourInt = hourInt % 12 || 12;
     // nextHour = nextHour % 12 || 12;
    } 

      let currentHourString = util.toLower(NumberToText.getHour(hourInt));
      //let nextHourString = util.toLower(NumberToText.getHour(nextHour));
      let currentMinuteParts = util.toLower(NumberToText.getMinutes(minuteInt)).split(' ');
      //let nextMinuteParts = util.toLower(NumberToText.getMinutes(nextMinutes)).split(' ');

      // Setup next values for animations
      this.domHelper.hoursNext.text = currentHourString;
      this.domHelper.tensNext.text = currentMinuteParts[0];
      this.domHelper.minutesNext.text = currentMinuteParts[1] || '';
      this.domHelper.minutesBNext.text = currentMinuteParts[2] || '';

    if (isFresh){//|| today.getSeconds() != 59) {
      // Skip animation
      this.domHelper.hours.text = currentHourString;
      this.domHelper.tens.text = currentMinuteParts[0];
      this.domHelper.minutes.text = currentMinuteParts[1] || '';
      this.domHelper.minutesB.text = currentMinuteParts[2] || '';
     // if (DEBUG) { this.domHelper.minutesB.text = secInt; }
      isFresh = false;
    } else {
      // Setup animation
      
      this.animator.handleTimeChange();
    }

    if (this.callback) {
        this.callback(today);
    }
  }
}