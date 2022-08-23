import { preferences } from "user-settings";
import * as messaging from 'messaging';
import * as fs from 'fs';

const SETTINGS_TYPE = 'cbor';
const SETTINGS_FILE = 'settings.cbor';

export default class SettingsManager {
  constructor(domHelper) {
    this.domHelper = domHelper;
    this.registerCompanionLink();
    this.getSavedSettings();
    this.setSettings();
  }

  registerCompanionLink() {
    messaging.peerSocket.onmessage = (event) => {
      this.handleMessage(event);
    };
    // Force settings to be sent on init
   /*messaging.peerSocket.addEventListener('open', () => {
      //console.log('INIT');
      messaging.peerSocket.send({
        key: 'INIT'
      });
    });*/
  }
  
    getSavedSettings() {
      try {
        this.settings = fs.readFileSync(SETTINGS_FILE, SETTINGS_TYPE);
        //console.info('read settings', JSON.stringify(this.settings));
      } catch (e) {
        this.settings = {};
        //console.info('fresh settings');
      }

      this.settings = {
        bgColor: this.settings.bgColor || '#000000',
        hourColor: this.settings.hourColor || '#FFFFFF',
        minColor: this.settings.minColor || '#FFFFFF',
        dateColor: this.settings.dateColor || '#FFFFFF',
        healthColor: this.settings.healthColor || '#FFFFFF',       
        showBattery: this.settings.showBattery || { 'selected': 0 }
      };
    }
  
   saveSettings() {
      try {
        fs.writeFileSync(SETTINGS_FILE, this.settings, SETTINGS_TYPE);
      } catch (e) {
        console.error(e);
      }
    }

    setSettings() {
      this.updateColors();
    }
  
    updateColors() {
      this.domHelper.background.style.fill = this.settings.bgColor;
      this.domHelper.hours.style.fill = this.settings.hourColor;
      this.domHelper.hoursNext.style.fill = this.settings.hourColor;
      this.domHelper.tens.style.fill = this.settings.minColor;
      this.domHelper.tensNext.style.fill = this.settings.minColor;
      this.domHelper.minutes.style.fill = this.settings.minColor;
      this.domHelper.minutesNext.style.fill = this.settings.minColor;
      this.domHelper.date.style.fill = this.settings.dateColor;
      this.domHelper.heartrate.style.fill = this.settings.healthColor;
      this.domHelper.stepcount.style.fill = this.settings.healthColor;
      this.domHelper.distancecount.style.fill = this.settings.healthColor;
      this.domHelper.floorcount.style.fill = this.settings.healthColor;
      this.domHelper.caloriescount.style.fill = this.settings.healthColor;
    }
  
    handleMessage(evt) {
      switch (evt.data.key) {
        case 'bgColor':
          this.settings.bgColor = evt.data.value;
          this.domHelper.background.style.fill = this.settings.bgColor;
          this.saveSettings();
          break;
        case 'hourColor':
          this.settings.hourColor = evt.data.value;
          this.domHelper.hours.style.fill = this.settings.hourColor;
          this.domHelper.hoursNext.style.fill = this.settings.hourColor;
          this.saveSettings();
          break;
        case 'minColor':
          this.settings.minColor = evt.data.value;
          this.domHelper.tens.style.fill = this.settings.minColor;
          this.domHelper.tensNext.style.fill = this.settings.minColor;
          this.domHelper.minutes.style.fill = this.settings.minColor;
          this.domHelper.minutesNext.style.fill = this.settings.minColor;
          this.saveSettings();
          break;
        case 'dateColor':
          this.settings.dateColor = evt.data.value;
          this.domHelper.date.style.fill = this.settings.dateColor;
          this.saveSettings();
          break;
        case 'healthColor':
          this.settings.healthColor = evt.data.value;
          this.domHelper.heartrate.style.fill = this.settings.healthColor;
          this.domHelper.stepcount.style.fill = this.settings.healthColor;
          this.domHelper.distancecount.style.fill = this.settings.healthColor;
          this.domHelper.floorcount.style.fill = this.settings.healthColor;
          this.domHelper.caloriescount.style.fill = this.settings.healthColor;
          this.saveSettings();
          break;
        case 'showBattery':
          this.settings.showBattery = evt.data.value;
          this.saveSettings();
          break;
      }
    }
  
   
}