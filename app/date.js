//import document from "document";
import NumberToText from '../common/numberToText';
import * as util from "../common/utils";

export default class DateManager {
  constructor(domHelper) {
    this.domHelper = domHelper;
  }

  updateDate(today) {
    this.domHelper.date.text = `${util.toLower(NumberToText.getDayOfWeek(today.getDay()))} ${today.getDate()} ${util.toLower(NumberToText.getMonth(today.getMonth()))}`;
    //this.domHelper.dayname.text = util.toLower(NumberToText.getDayOfWeek(today.getDay()));
    //this.domHelper.daydigit.text = today.getDate();
    //this.domHelper.monthname.text = util.toLower(NumberToText.getMonth(today.getMonth()));
    // Reduce the width of the text field until text overflows
/*
while (!this.domHelper.dayname.textOverflowing) {

this.domHelper.dayname.width--;

}*/

// Increase the width of the text field until text is no longer overflowing
/*
while (this.domHelper.dayname.textOverflowing) {

  this.domHelper.dayname.width++;

}*/
    
    //this.domHelper.daydigit.x = this.domHelper.dayname.x + this.domHelper.dayname.getBBox().width + 4;
    //this.domHelper.monthname.x = this.domHelper.daydigit.x + this.domHelper.daydigit.getBBox().width + 4;
 
  }
}