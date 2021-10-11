import document from "document";
import { battery } from 'power';
import { charger } from 'power';

export default class BatteryUtil {
    constructor(domHelper, settingsManager) {
        this.domHelper = domHelper;
        this.settingsManager = settingsManager;
    }

    updateBattery() {
      let v = this.settingsManager.settings.showBattery2.selected;
        if ( (v == 1) || (v == 2 && battery.chargeLevel < 25) ) {      
          this.domHelper.batterycontainer.style.display = "inline";
          this.domHelper.batterylevel.text = Math.floor(battery.chargeLevel) + "%";
        } else {
          this.domHelper.batterycontainer.style.display = "none";

        }
    }
} == 0) ? battery.chargeLevel : batteryMain * 10;
        } else {
            const batteryLevel = battery.chargeLevel;
        }
      
        return batteryLevel;
    }
  
    setBatteryLevel(level) {
        this.domHelper.batteryBar.width = Math.ceil(this.domHelper.root.width * (1 - (level / 100)));
        this.domHelper.batteryBar.x = Math.ceil(this.domHelper.root.width * (level / 100));
    }
  
    hideBattery() {
        this.domHelper.batteryBar.x = this.domHelper.root.width;
        this.domHelper.batteryBar.width = this.domHelper.root.width;
    }
}