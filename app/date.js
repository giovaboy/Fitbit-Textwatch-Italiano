import NumberToText from "../common/numberToText";
import * as util from "../common/utils";

export default class DateManager {
  constructor(domHelper) {
    this.domHelper = domHelper;
  }

  updateDate(today) {
    let sData = `${util.toLower(NumberToText.getDayOfWeek(today.getDay()))} ${today.getDate()} ${util.toLower(NumberToText.getMonth(today.getMonth()))}`;
    
    if ( this.domHelper.date.text != sData ) {
      this.domHelper.date.text = sData;
    }
  }
}