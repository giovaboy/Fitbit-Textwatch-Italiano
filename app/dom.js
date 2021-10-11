import document from 'document';

export default class DomHelper {
  
  constructor() {
    this.grabElements();
  }
  
  grabElements() {
    this.document = document;
    this.root = document.getElementById('root');
    this.background = document.getElementById('tapzone');
    
    this.batterycontainer = document.getElementById('batterycontainer');

    this.batteryicon = document.getElementById('batteryIcon');


    this.batterylevel = document.getElementById('batterylevel');
    
    this.heartratecontainer = document.getElementById('heartratecontainer');
    
    this.hearticon = document.getElementById('heartIcon');
    this.heartrate = document.getElementById('heartrate');
    
    this.stepcontainer = document.getElementById('stepcontainer');
    this.stepicon = document.getElementById('stepIcon');
    this.stepcount = document.getElementById('stepcount');

    this.date = document.getElementById('date');

    this.hours = document.getElementById('hours');
    this.hoursCont = document.getElementById('hoursCont');
    this.hoursNext = document.getElementById('hoursNext');
    this.hoursNextCont = document.getElementById('hoursNextCont');

    this.tens = document.getElementById('tens');
    this.tensCont = document.getElementById('tensCont');
    this.tensNext = document.getElementById('tensNext');
    this.tensNextCont = document.getElementById('tensNextCont');

    this.minutes = document.getElementById('minutes');
    this.minutesCont = document.getElementById('minutesCont');
    this.minutesNext = document.getElementById('minutesNext');
    this.minutesNextCont = document.getElementById('minutesNextCont');

  }
}