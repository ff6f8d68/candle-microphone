input.onSound(DetectedSound.Loud, function () {
    lit = !(lit)
})
let log = 0
let op = 0
let flicker = 0
let lm = 0
let lit = false
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . # # # .
    `)
lit = true
basic.forever(function () {
    if (lit) {
        lm = 0
        flicker = randint(1, 3)
        op = randint(60, 255)
        for (let index = 0; index < 5; index++) {
            led.unplot(1, log - lm)
            led.unplot(2, log - lm)
            led.unplot(3, log - lm)
            lm += 1
        }
        lm = 0
        led.plotBrightness(flicker, log, op)
        basic.pause(500)
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
    }
})
basic.forever(function () {
    basic.pause(5000)
    log += 1
})
