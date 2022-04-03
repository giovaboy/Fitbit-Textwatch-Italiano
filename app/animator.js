export default class Animator {
  
  constructor(domHelper) {
    this.domHelper = domHelper;
  }

  handleTimeChange() {
    this.setupHourAnimation();
    this.setupMinuteAnimation();
  }

  setupHourAnimation() {
    if ( this.domHelper.hours.text != this.domHelper.hoursNext.text ) {
      this.domHelper.hoursCont.animate('enable');
      this.domHelper.hoursNextCont.animate('enable');
      setTimeout(() => {
          this.domHelper.hours.text = this.domHelper.hoursNext.text;
          this.domHelper.hoursCont.animate('disable');
          this.domHelper.hoursNextCont.animate('disable');
      }, 700);//2000 = 2 secondi
    }
  }

  setupMinuteAnimation() {
    if (this.domHelper.tens.text != this.domHelper.tensNext.text) {
     this.domHelper.tensCont.animate('enable');
     this.domHelper.tensNextCont.animate('enable');
     setTimeout(() => {
       this.domHelper.tens.text = this.domHelper.tensNext.text;
       this.domHelper.tensCont.animate('disable');
       this.domHelper.tensNextCont.animate('disable');
     },700);
    }

    if (this.domHelper.minutes.text != this.domHelper.minutesNext.text) {
      this.domHelper.minutesCont.animate('enable');
      this.domHelper.minutesNextCont.animate('enable');
        setTimeout(() => {
          this.domHelper.minutes.text = this.domHelper.minutesNext.text;
          this.domHelper.minutesCont.animate('disable');
          this.domHelper.minutesNextCont.animate('disable');
        }, 700);
    }
  }
}