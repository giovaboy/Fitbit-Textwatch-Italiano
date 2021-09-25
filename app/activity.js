import document from "document";
import {today} from 'user-activity';
import {HeartRateSensor} from 'heart-rate';

export default class HealthMonitor {
  
  constructor(domHelper) {
    this.domHelper = domHelper;
    this.hrm = new HeartRateSensor();
    this.hrm.onreading = () => {
      this.updateHeartData();
    }
  }

  updateHealth(time) {
    if (time.getMinutes() % 1 == 0) {
      this.hrm.start();
    }
    this.updateStepData();
  }

  updateStepData() {
    let metrics = today.adjusted;
    this.domHelper.stepcount.text = `${metrics['steps']}` || '';
  }

  updateHeartData() {
    //const hr = this.hrm.heartRate;
    this.domHelper.heartrate.text = `♥️ ${this.hrm.heartRate}`;
    this.hrm.stop();
  }
  /*
  // Create a new instance of the HeartRateSensor object
let heartRateMonitor = new HeartRateSensor();
heartRateMonitor.onreading = function () {
    // Peek the current sensor values
    heartRateLabel.text = heartRateMonitor.heartRate;
}

function updateHeartRateSensor() {
    // Begin monitoring the sensor
    heartRateMonitor.start();
}

function stopHeartRateSensor() {
    // Stop monitoring the sensor
    heartRateMonitor.stop();
}*/
  
}