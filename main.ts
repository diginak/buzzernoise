input.onButtonPressed(Button.A, function () {
    basic.showString("")
    while (true) {
        pins.analogSetPitchPin(AnalogPin.P0)
        music.setVolume(255)
        led.plot(4, 1)
        music.playMelody("E B C5 A B G A F ", 40)
    }
})
