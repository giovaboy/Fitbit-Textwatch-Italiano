import NumberToText from "../common/numberToText";

export default class DateManager {
  constructor(domHelper) {
    this.date = domHelper.date;
  }

  updateDate(today) {
    if (this.date.text.indexOf(` ${today.getDate()} `,5) < 0) {
      let sData = `${NumberToText.getDayOfWeek(today.getDay())} ${today.getDate()} ${NumberToText.getMonth(today.getMonth())}`;
      this.date.text = sData;
    }
  }
  
} sData ) {
      this.domHelper.date.text = sData;
    }
  }
}