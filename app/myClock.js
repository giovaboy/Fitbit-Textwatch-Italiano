import clock from "clock";
import { display } from "display";
import { me } from "appbit";
import { preferences } from "user-settings";
import NumberToText from "../common/numberToText";

//const DEBUG = true;

export default class myClock {
  
  constructor(animator, domHelper, dateUpdater, heartData, healthData, batteryUpdater, settingsManager) {
    //if (DEBUG) console.log("constructor called");
    
    clock.granularity = "minutes";
    
    clock.ontick = (event) => {
      this.doTick(event.date);
    };
    
    display.addEventListener("change", () => {
      if (!display.on) {
        this.isFresh = true;
        //this.heartData.stopHr();
      } else {
        this.heartData.updateHeart();
        this.healthData.updateHealthData();
        this.batteryUpdater.updateBattery();
      }
    });

    this.isFresh = true;
    this.animator = animator;
    this.domHelper = domHelper;
    this.dateUpdater = dateUpdater;
    this.heartData = heartData;
    this.healthData = healthData;
    this.batteryUpdater = batteryUpdater;
    this.settingsManager = settingsManager;

    this.heartData.updateHeart();
    this.healthData.updateHealthData();
    this.batteryUpdater.updateBattery();
    this.doTick(new Date());
  }
  
  doTick(date) {
    //if (DEBUG) console.log("doTick(" + date.toTimeString() + ")");
    //if (DEBUG) console.log("isFresh? " + this.isFresh);
    let hourInt = date.getHours();
    let minuteInt = date.getMinutes();
    
    if (preferences.clockDisplay === "12h") {
      hourInt = hourInt % 12 || 12;
    } 

    let currentHourString = NumberToText.getHour(hourInt).replace(' ', '');
    let currentMinuteParts = NumberToText.getMinutes(minuteInt).split(' ');

    // Setup next values for animations    
    this.domHelper.hoursNext.text = currentHourString;
    this.domHelper.tensNext.text = currentMinuteParts[0] + ' ' + currentMinuteParts[1];
    this.domHelper.minutesNext.text = currentMinuteParts[2] || '';    
    
    /*if (display.aodAvailable && me.permissions.granted("access_aod")) {
      // tell the system we support AOD
      display.aodAllowed = true;
      display.addEventListener("change", () => {
        // Is the display on?
        if (!display.aodActive && display.on) {
          //if (DEBUG) console.log("display is on in AOD");
          this.domHelper.background.style.fill = this.settingsManager.settings.bgColor;

          this.domHelper.hours.style.fontFamily = "Colfax-Bold";
          this.domHelper.tens.style.fontFamily = "Colfax-Regular";
          this.domHelper.minutes.style.fontFamily = "Colfax-Regular";

          this.domHelper.hours.style.fill = this.settingsManager.settings.hourColor;
          this.domHelper.tens.style.fill = this.settingsManager.settings.minColor;
          this.domHelper.minutes.style.fill = this.settingsManager.settings.minColor;

          this.domHelper.date.style.display = "inline";
          this.domHelper.heartratecontainer.style.display = "inline";
          this.domHelper.stepcontainer.style.display = "inline";
          this.domHelper.floorcontainer.style.display = "none";
        } else {
          this.domHelper.background.style.fill = '#000000';
          this.domHelper.hours.style.fontFamily = "Colfax-Light";
          this.domHelper.tens.style.fontFamily = "Colfax-Light";
          this.domHelper.minutes.style.fontFamily = "Colfax-Light";

          this.domHelper.hours.style.fill = '#FFFFFF';
          this.domHelper.tens.style.fill = '#FFFFFF';
          this.domHelper.minutes.style.fill = '#FFFFFF';

          this.domHelper.date.style.display = "none";
          this.domHelper.heartratecontainer.style.display = "none";
          this.domHelper.healthcontainer.style.display = "none";
          
          this.isFresh = true;
        }
      });
    } else {*/
      /*
      SPOSTATO NEL CONSTRUCTOR
      display.addEventListener("change", () => {
        if (!display.on) {
          this.isFresh = true;
        } else {
          this.heartData.updateHeart();
          this.healthData.updateHealthData();
          this.batteryUpdater.updateBattery();
        }
      });*/
   // }
          
    if (this.isFresh) {
      // Skip animation
      this.domHelper.hours.text = currentHourString;
      this.domHelper.tens.text = currentMinuteParts[0] + ' ' + currentMinuteParts[1];
      this.domHelper.minutes.text = currentMinuteParts[2] || '';
      this.isFresh = false;
    } else {
      this.animator.handleTimeChange();
    }
    
    this.dateUpdater.updateDate(date);
    
  }
}