export default class Animator {
  
  constructor(domHelper) {
    this.domHelper = domHelper;
  }

  handleTimeChange() {
    this.setupHourAnimation();
    this.setupMinuteAnimation();
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
      }, 700);//2000 = 2 secondi
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
        });
        setTimeout(() => {
            this.domHelper.tens.text = this.domHelper.tensNext.text;
            this.domHelper.minutes.text = this.domHelper.minutesNext.text;
        }, 700);
    }
} HEAD
    }
}ext.text;
        }, 690);
    }
}ens.text = this.domHelper.tensNext.text;
            this.domHelper.minutes.text = this.domHelper.minutesNext.text;
        }, 690);
    }
}.animate('activate');
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
=======
>>>>>>> 1cfa0b60feffb07cd3cfff690780be43504a1d73
    }
}