import { me } from "appbit";
import { today } from "user-activity";

export default class Health {
  constructor(domHelper) {
    this.domHelper = domHelper;
  }

  updateHealthData() {
    if (me.permissions.granted("access_activity")) {
      if ( today.adjusted ) {
        this.domHelper.stepcount.text = today.adjusted.steps;
        this.domHelper.distancecount.text = `${(today.adjusted.distance/1000).toFixed(2)}`;//.replace(/,/g,'.');
        this.domHelper.floorcount.text = today.adjusted.elevationGain;
        this.domHelper.caloriescount.text = today.adjusted.calories;
      } else {
        this.domHelper.stepcount.text = "--";
        this.domHelper.distancecount.text = "--";
        this.domHelper.floorcount.text = "--";
        this.domHelper.caloriescount.text = "--";
      }
    } else {
      this.domHelper.healthcontainer.style.display = "none";
    }
  }

}