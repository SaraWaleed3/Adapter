// Charger interface
class Charger {
    plug() {
        throw new Error('This method should be overridden by subclasses');
    }
}

// Concrete Charger implementations
class USBCharger extends Charger {
    plug() {
        console.log('Charging with USB-C');
    }
}

class MicroUSBCharger extends Charger {
    plug() {
        console.log('Charging with Micro USB');
    }
}

class LightningCharger extends Charger {
    plug() {
        console.log('Charging with Lightning');
    }
}

// Adapter class to make different chargers compatible
class UniversalChargerAdapter extends Charger {
    constructor(charger) {
        super();
        this.charger = charger;
    }

    plug() {
        console.log('Adapter: Plugging in...');
        this.charger.plug();
    }
}

// Client code using the adapted system
function clientCode(charger) {
    charger.plug();
}

// Using the Adapter to make different chargers compatible
const usbCharger = new USBCharger();
const microUSBCharger = new MicroUSBCharger();
const lightningCharger = new LightningCharger();

const universalAdapterForUSB = new UniversalChargerAdapter(usbCharger);
const universalAdapterForMicroUSB = new UniversalChargerAdapter(microUSBCharger);
const universalAdapterForLightning = new UniversalChargerAdapter(lightningCharger);

console.log('Client: Using the universal adapter for charging:');
clientCode(universalAdapterForUSB);
clientCode(universalAdapterForMicroUSB);
clientCode(universalAdapterForLightning);
