input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(0)
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P16, EventBusValue.MICROBIT_PIN_EVT_FALL, function () {
    basic.showNumber(16)
})
input.onButtonPressed(Button.A, function () {
    basic.showString("A")
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P8, EventBusValue.MICROBIT_PIN_EVT_FALL, function () {
    basic.showNumber(8)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showNumber(2)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("AB")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showNumber(1)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.pause(30)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(30)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(30)
    basic.showIcon(IconNames.Diamond)
    basic.pause(30)
    basic.showIcon(IconNames.Target)
    basic.pause(30)
    basic.clearScreen()
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P12, EventBusValue.MICROBIT_PIN_EVT_FALL, function () {
    basic.showNumber(12)
})
basic.showIcon(IconNames.Heart)
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
pins.setEvents(DigitalPin.P16, PinEventType.Edge)
pins.setPull(DigitalPin.P12, PinPullMode.PullUp)
pins.setEvents(DigitalPin.P12, PinEventType.Edge)
pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
pins.setEvents(DigitalPin.P8, PinEventType.Edge)
