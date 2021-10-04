input.onButtonPressed(Button.A, function () {
    pins.analogSetPitchPin(AnalogPin.P0)
    pins.analogPitch(700, 1000)
})
