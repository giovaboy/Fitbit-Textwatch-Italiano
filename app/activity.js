import document from "document";
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
        //console.log("HRM ONREADING");
        this.updateHeartData();
      }
    }
    
    if (BodyPresenceSensor) {
      this.body = new BodyPresenceSensor();
       this.body.onreading = () => {
        //console.log("BODY ONREADING");
        if ( !this.body.present ) {
          this.hrm.stop();
          this.domHelper.heartrate.text = "--";
        }
      
      }
    }
  }

  updateHealth() {
    this.body.start();
    if (!display.aodActive && display.on) {
      this.hrm.start();
    } else {
      this.hrm.stop();
    }

    this.updateStepData();
  }

  updateStepData() {
    let metrics = today.adjusted;
    if ( metrics['steps']) {
      this.domHelper.stepcount.text = metrics['steps'];
    } else {
      this.domHelper.stepcount.text = '';
    }
  }

  updateHeartData() {
    this.domHelper.heartrate.text = this.hrm.heartRate;
    if (!display.aodActive && display.on) {
    } else {
      this.hrm.stop();
    }
  }  
}