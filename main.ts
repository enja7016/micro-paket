radio.onReceivedNumber(function (receivedNumber) {
    basic.clearScreen()
    if (receivedNumber == 0) {
        basic.showArrow(ArrowNames.West)
        music.playTone(523, music.beat(BeatFraction.Whole))
    } else if (receivedNumber == 1) {
        basic.showArrow(ArrowNames.East)
        music.playTone(523, music.beat(BeatFraction.Whole))
    } else if (receivedNumber == 2) {
        basic.showIcon(IconNames.Sad)
        basic.pause(500)
        music.playTone(523, music.beat(BeatFraction.Double))
    } else if (receivedNumber == 3) {
        basic.showIcon(IconNames.Happy)
        basic.pause(500)
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
    } else if (receivedNumber == 4) {
        basic.showArrow(ArrowNames.South)
        music.playTone(523, music.beat(BeatFraction.Whole))
    } else if (receivedNumber == 5) {
        basic.showArrow(ArrowNames.North)
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
    basic.clearScreen()
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showArrow(ArrowNames.South)
    radio.sendNumber(up)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showArrow(ArrowNames.West)
    radio.sendNumber(left_arrow)
})
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendNumber(screen_up)
    if (true) {
        basic.showIcon(IconNames.Happy)
        basic.pause(500)
    }
})
input.onGesture(Gesture.ScreenDown, function () {
    radio.sendNumber(shake)
    if (true) {
        basic.showIcon(IconNames.Sad)
        basic.pause(500)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showArrow(ArrowNames.East)
    radio.sendNumber(right_arrow)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showArrow(ArrowNames.North)
    radio.sendNumber(down)
})
let down = 0
let up = 0
let screen_up = 0
let shake = 0
let left_arrow = 0
let right_arrow = 0
basic.showIcon(IconNames.Happy)
radio.setGroup(40)
right_arrow = 1
left_arrow = 0
shake = 2
screen_up = 3
up = 4
down = 5
