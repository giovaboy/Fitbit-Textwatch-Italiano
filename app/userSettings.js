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
    messaging.peerSocket.addEventListener('open', () => {
      messaging.peerSocket.send({
        key: 'INIT'
      });
    });
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
        fgColor: this.settings.fgColor || '#FFFFFF',
        healthColor: this.settings.healthColor || '#FFFFFF',
        bgColor: this.settings.bgColor || '#000000',
        hourColor: this.settings.hourColor || '#FFFFFF',
        minColor: this.settings.minColor || '#FFFFFF',        
        showBattery: this.settings.showBattery || { "selected": 0 }
        //showMoon: this.settings.showMoon || false
      };
    }

   /*updateBatteryFill() {
      if (!this.settings.bgColor || !this.settings.fgColor) {
        return;
      }
    }*/
  
    setSettings() {
      this.updateBackground();
      this.updateForeground();
    }
  
    updateBackground() {
      this.domHelper.background.style.fill = this.settings.bgColor;
    }
  
    updateForeground() {
      this.domHelper.hours.style.fill = this.settings.hourColor;
      this.domHelper.hoursNext.style.fill = this.settings.hourColor;
      this.domHelper.tens.style.fill = this.settings.minColor;
      this.domHelper.tensNext.style.fill = this.settings.minColor;
      this.domHelper.minutes.style.fill = this.settings.minColor;
      this.domHelper.minutesNext.style.fill = this.settings.minColor;
      this.domHelper.date.style.fill = this.settings.fgColor;
      this.domHelper.heartrate.style.fill = this.settings.healthColor;
      this.domHelper.stepcount.style.fill = this.settings.healthColor;
      this.domHelper.distancecount.style.fill = this.settings.healthColor;
      this.domHelper.floorcount.style.fill = this.settings.healthColor;
      this.domHelper.caloriescount.style.fill = this.settings.healthColor;
    }
  
    handleMessage(evt) {
      if (evt.data.key === 'bgColor') {
        this.settings.bgColor = evt.data.value;
        this.updateBackground();
      }
      if (evt.data.key === 'fgColor') {
        this.settings.fgColor = evt.data.value;
        this.updateForeground();
      }
      if (evt.data.key === 'healthColor') {
        this.settings.healthColor = evt.data.value;
        this.updateForeground();
      }
      if (evt.data.key == 'hourColor') {
        this.settings.hourColor = evt.data.value;
        this.updateForeground();
      }
      if (evt.data.key == 'minColor') {
        this.settings.minColor = evt.data.value;
        this.updateForeground();
      }      
      if (evt.data.key === 'showBattery') {
        this.settings.showBattery = evt.data.value;
        
      }
      this.saveSettings();
    }
  
    saveSettings() {
      try {
        fs.writeFileSync(SETTINGS_FILE, this.settings, SETTINGS_TYPE);
      } catch (e) {
        console.error(e);
      }
    }
}