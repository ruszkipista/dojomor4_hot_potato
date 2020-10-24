let timer = 0
function doBlink (timer: number) {
    led.toggle(2, timer % 5)
}
input.onButtonPressed(Button.AB, function () {
    timer = randint(5, 20)
    basic.showIcon(IconNames.Ghost)
    while (timer >= 0) {
        doBlink(timer)
        basic.pause(500)
        doBlink(timer)
        basic.pause(500)
        timer += -1
    }
    basic.showIcon(IconNames.No)
})
