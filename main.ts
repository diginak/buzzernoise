input.onButtonPressed(Button.A, function () {
    basic.showString("Naureen !!")
    while (true) {
        pins.analogSetPitchPin(AnalogPin.P0)
        music.playMelody("E B C5 A B G A F ", 263)
    }
})
input.onButtonPressed(Button.B, function () {
    while (true) {
        basic.showString("Nouman !!")
        pins.analogSetPitchPin(AnalogPin.P0)
        music.playMelody("A A A A A A A A ", 185)
    }
})
