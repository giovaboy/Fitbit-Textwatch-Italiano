import { me } from "appbit";
import { HeartRateSensor } from "heart-rate";
import { BodyPresenceSensor } from "body-presence";
import { display } from "display";

export default class HeartMonitor {
  
  constructor(domHelper) {
    this.domHelper = domHelper;
    
    if (HeartRateSensor) {
      this.hrm = new HeartRateSensor({ frequency: 1, batch: 3 });
      this.domHelper.heartrate.text = "..";
      this.hrm.onreading = () => {
        //console.log("onreading HR");
        this.updateHeartData();
      }
    }
    
    if (BodyPresenceSensor) {
      this.body = new BodyPresenceSensor();
      this.body.onreading = () => {        
        if ( !this.body.present ) {
          this.hrm.stop();
          this.domHelper.heartrate.text = "--";
        }
      }
    }
  }

  updateHeart() {
    if (me.permissions.granted("access_heart_rate")) {
      this.body.start();
      if (!display.aodActive && display.on) {
        this.hrm.start();
      } else {
        this.hrm.stop();
      }
    } else {
      this.domHelper.heartratecontainer.style.display = "none";
    }
  }

  updateHeartData() {
    this.domHelper.heartrate.text = this.hrm.heartRate;
    if (!display.aodActive && display.on) {
    }else{
      this.hrm.stop();
    }
  }  
}