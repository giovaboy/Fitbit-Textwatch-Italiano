import clock from "clock";
import { display } from "display";
import { me } from "appbit";
import { preferences } from "user-settings";
import NumberToText from '../common/numberToText';

//const DEBUG = false;

export default class myClock {
  
  constructor(callback, animator, domHelper, settingsManager) {
    clock.granularity = 'minutes';
    clock.ontick = () => {
      this.doTick();
    };

    this.isFresh = true;
    this.callback = callback;
    this.animator = animator;
    this.domHelper = domHelper;
    this.settingsManager = settingsManager;
  }
  
  doTick(event) {
    //if (DEBUG) console.log(this.isFresh);
    //if (DEBUG) console.log(this.callback);
    const today = event ? event.date : new Date();
    // Now
    let hourInt = today.getHours();
    const minuteInt = today.getMinutes();
    
    if (preferences.clockDisplay === "12h") {
      hourInt = hourInt % 12 || 12;
    } 

    let currentHourString = NumberToText.getHour(hourInt).replace(' ', '');
    let currentMinuteParts = NumberToText.getMinutes(minuteInt).split(' ');

    // Setup next values for animations    
    this.domHelper.hoursNext.text = currentHourString;
    this.domHelper.tensNext.text = currentMinuteParts[0] + ' ' + currentMinuteParts[1];
    this.domHelper.minutesNext.text = currentMinuteParts[2] || '';    
    
    if (display.aodAvailable && me.permissions.granted("access_aod")) {
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
          this.domHelper.stepcontainer.style.display = "none";
          this.isFresh = true;
        }
      });
    } else {
      display.addEventListener("change", () => {
      // Is the display on?
        if (display.on) {
          //if (DEBUG) console.log("display is on");          
        } else {
          this.isFresh = true;
        }
      });
    } 
    
    /*
     //TEST
          if(minuteInt % 2 == 1) {
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
            this.domHelper.stepcontainer.style.display = "none";
            this.isFresh = true;            
          }
    */
    if ( this.isFresh ) {
      // Skip animation
      this.domHelper.hours.text = currentHourString;
      this.domHelper.tens.text = currentMinuteParts[0] + ' ' + currentMinuteParts[1];
      this.domHelper.minutes.text = currentMinuteParts[2] || '';
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
} } else {
      // Setup animation
      this.animator.handleTimeChange();
    }

    if (this.callback) {
        this.callback(today);
    }
  }
}tor.handleTimeChange();
    }

    if (this.callback) {
        this.callback(today);
    }
  }
}