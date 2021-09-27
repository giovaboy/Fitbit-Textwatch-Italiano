import document from "document";

export default class Animator {
  
  constructor(domHelper) {
    this.animation = null;
    this.domHelper = domHelper;
  }

  handleTimeChange() {
        if (this.animation) {
          console.log(this.animation);
          clearTimeout(this.animation);
        }
        //if (!this.aod) {
          this.setupHourAnimation();
          this.setupMinuteAnimation();
       // } else {
       //   this.domHelper.hours.text = this.domHelper.hoursNext.text;
       //   this.domHelper.tens.text = this.domHelper.tensNext.text;
       //   this.domHelper.minutes.text = this.domHelper.minutesNext.text;
       // }
    }

    setupHourAnimation() {
      requestAnimationFrame(() => {
        if ( this.domHelper.hours.text != this.domHelper.hoursNext.text ) {
          this.domHelper.hoursCont.animate('activate');
          this.domHelper.hoursNextCont.animate('activate');
        }
      });
       setTimeout(() => {
            this.domHelper.hours.text = this.domHelper.hoursNext.text;
       }, 500);//2000 = 2 secondi
     // });
    }

    setupMinuteAnimation() {
        requestAnimationFrame(() => {
           if (this.domHelper.tens.text != this.domHelper.tensNext.text) {
             this.domHelper.tensCont.animate('activate');
             this.domHelper.tensNextCont.animate('activate');
            }
            if (this.domHelper.minutes.text != this.domHelper.minutesNext.text) {
              this.domHelper.minutesCont.animate('activate');
              this.domHelper.minutesNextCont.animate('activate');
            }
            if ( this.domHelper.minutesB.text != this.domHelper.minutesBNext.text ){
              this.domHelper.minutesBCont.animate('activate');
              this.domHelper.minutesBNextCont.animate('activate');
            }
        });
            setTimeout(() => {
                this.domHelper.tens.text = this.domHelper.tensNext.text;
           // }, 500);
            //setTimeout(() => {
                this.domHelper.minutes.text = this.domHelper.minutesNext.text;
                this.domHelper.minutesB.text = this.domHelper.minutesBNext.text;
            }, 500);
       // });
    }
}