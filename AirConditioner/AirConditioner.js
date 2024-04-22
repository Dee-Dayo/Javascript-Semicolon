class AirConditioner{
    constructor(){
        this.isOn = false;
        this.temperature = 16;
    }

    decreaseTemperature(){ if (this.temperature > 16 && this.isOn) this.temperature --; }
    increaseTemperature(){ if (this.temperature < 30 && this.isOn) this.temperature++; }
    getTemp(){ return this.temperature; }
    getIsOn(){ return this.isOn; }
    turnOn(){ this.isOn = true; }
    turnOff(){ this.isOn = false; }
}

module.exports = AirConditioner;