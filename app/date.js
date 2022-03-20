import moonPhase from "./moon"
//import moonIcons from "./moon"
//const moonIcons = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];

import NumberToText from "../common/numberToText";
import * as util from "../common/utils";

export default class DateManager {
  constructor(domHelper) {
    this.domHelper = domHelper;
  }

  updateDate(today) {
    if (false){//this.settingsManager.settings.showMoon) {
      const m = Math.floor(moonPhase(today)*8);
      console.log(JSON.stringify(this.domHelper.moonCycle,null,4));
     this.domHelper.moonCycle.onclick = undefined;
     this.domHelper.moonCycle.removeEventListener('click',undefined);
      this.domHelper.moonCycle.value = m;
    } else {
      this.domHelper.mooncontainer.style.display = "none";
    }
    
    this.domHelper.date.text = `${util.toLower(NumberToText.getDayOfWeek(today.getDay()))} ${today.getDate()} ${util.toLower(NumberToText.getMonth(today.getMonth()))}`;
  }
}