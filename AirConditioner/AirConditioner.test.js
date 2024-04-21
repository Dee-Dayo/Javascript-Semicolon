let AirConditioner = require("./AirConditioner.js");

describe("AirConditioner", ()=> {
    let myAC;

    beforeEach(()=>{
        myAC = new AirConditioner();
    })

    test("AC is off by default", ()=>{
        expect(myAC.getIsOn()).toBeFalsy();
    })

    test("Ac can be turn on", ()=>{
        myAC.turnOn()
        expect(myAC.getIsOn()).toBeTruthy()
    })

    test("Ac is turn on - Can be turned off", ()=>{
        expect(myAC.getIsOn()).toBeFalsy()
        myAC.turnOn()
        expect(myAC.getIsOn()).toBeTruthy()

        myAC.turnOff()
        expect(myAC.getIsOn()).toBeFalsy()
    })

    test("Ac temperature is 16 by default", ()=>{
        myAC.turnOn()
        expect(myAC.getIsOn()).toBeTruthy()

        expect(myAC.getTemp()).toBe(16)
    })

    test("Ac temperature can increase", ()=>{
        myAC.turnOn()
        expect(myAC.getTemp()).toBe(16)

        myAC.increaseTemperature()
        expect(myAC.getTemp()).toBe(17)
    })

    test("Ac temperature can reduce", ()=>{
         myAC.turnOn()
        expect(myAC.getTemp()).toBe(16)

        myAC.increaseTemperature()
        expect(myAC.getTemp()).toBe(17)

        myAC.decreaseTemperature()
        expect(myAC.getTemp()).toBe(16)
    })

    test("Ac temperature cant go below 16", ()=>{
        myAC.turnOn()
        expect(myAC.getTemp()).toBe(16)

        myAC.decreaseTemperature()
        expect(myAC.getTemp()).toBe(16)
    })

    test("Ac temperature cant reduce if off", ()=>{
         myAC.turnOn()
        expect(myAC.getTemp()).toBe(16)

        myAC.increaseTemperature()
        myAC.increaseTemperature()
        expect(myAC.getTemp()).toBe(18)

        myAC.turnOff()
        expect(myAC.isOn).toBeFalsy()
        myAC.decreaseTemperature()
        expect(myAC.getTemp()).toBe(18)
    })

    test("Ac temperature cant go beyond 30", ()=>{
        myAC.turnOn()

        for (let count = 0; count <= 13; count++){
            myAC.increaseTemperature()
        }
        expect(myAC.getTemp()).toBe(30)

        myAC.increaseTemperature()
        expect(myAC.getTemp()).toBe(30)
    })

    test("Ac temperature cant increase if ac is off", ()=>{
        expect(myAC.getTemp()).toBe(16)

        myAC.increaseTemperature()
        expect(myAC.getTemp()).toBe(16)
    })
})
