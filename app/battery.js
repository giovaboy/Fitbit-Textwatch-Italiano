import { battery } from "power";

export default class BatteryUtil {
    constructor(domHelper, settingsManager) {
        this.domHelper = domHelper;
        this.settingsManager = settingsManager;
    }

    updateBattery() {
      if ( !battery.charging ) {
        let v = this.settingsManager.settings.showBattery2.selected;
          if ( (v == 1) || (v == 2 && battery.chargeLevel < 25) ) {      
            this.domHelper.batterycontainer.style.display = "inline";
            this.domHelper.batterylevel.text = Math.floor(battery.chargeLevel) + "%";
          } else {
            this.domHelper.batterycontainer.style.display = "none";
          }
      } else {
        this.domHelper.batterycontainer.style.display = "inline";
        this.domHelper.batterylevel.text = "+";
      }
    }
  
}evel.text = "+";
      }
    }
  
}