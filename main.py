def on_button_pressed_a():
    pins.analog_set_pitch_pin(AnalogPin.P0)
    pins.analog_pitch(700, 1000)
input.on_button_pressed(Button.A, on_button_pressed_a)
