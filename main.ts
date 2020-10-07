let potentiometer = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    potentiometer = pins.analogReadPin(AnalogPin.P1)
    basic.showNumber(potentiometer)
    robotbit.Servo(robotbit.Servos.S1, 0)
    basic.showNumber(0)
    basic.pause(1000)
    basic.showNumber(potentiometer)
    robotbit.Servo(robotbit.Servos.S1, 180)
    basic.pause(1000)
    basic.showNumber(180)
})
