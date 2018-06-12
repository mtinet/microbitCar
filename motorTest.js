let item = 0
let speed = 0
input.onButtonPressed(Button.A, () => {
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    speedUp()
    basic.pause(item)
    speedDown()
})
function stop()  {
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
}
input.onButtonPressed(Button.B, () => {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)
    speedUp()
    basic.pause(item)
    speedDown()
})
function speedUp()  {
    speed = 0
    for (let i = 0; i < 10; i++) {
        pins.analogWritePin(AnalogPin.P12, speed)
        pins.analogWritePin(AnalogPin.P14, speed)
        speed = speed + 100
        basic.pause(50)
    }
    pins.analogWritePin(AnalogPin.P12, 1023)
    pins.analogWritePin(AnalogPin.P14, 1023)
}
function speedDown()  {
    speed = 1023
    for (let i = 0; i < 10; i++) {
        pins.analogWritePin(AnalogPin.P12, speed)
        pins.analogWritePin(AnalogPin.P14, speed)
        speed = speed - 100
        basic.pause(50)
    }
    pins.analogWritePin(AnalogPin.P12, 0)
    pins.analogWritePin(AnalogPin.P14, 0)
}
basic.showIcon(IconNames.Heart)
item = 500
stop()
