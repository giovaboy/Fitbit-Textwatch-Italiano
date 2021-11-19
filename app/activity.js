import { me } from "appbit";
import { today } from 'user-activity';
import { HeartRateSensor } from 'heart-rate';
import { BodyPresenceSensor } from "body-presence";
import { display } from "display";

export default class HealthMonitor {
  
  constructor(domHelper) {
    this.domHelper = domHelper;
    
    if (HeartRateSensor) {
      this.hrm = new HeartRateSensor({ frequency: 1 });
      this.hrm.onreading = () => {
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

  updateHealth() {
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

    this.updateStepData();
  }

  updateStepData() {
    if (me.permissions.granted("access_activity")) {
      let metrics = today.adjusted;
      if ( metrics['steps'] ) {
        this.domHelper.stepcount.text = metrics['steps'];
      } else {
        this.domHelper.stepcount.text = '';
      }
    } else {
      this.domHelper.stepcontainer.style.display = "none";

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