radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showArrow(ArrowNames.West)
    } else if (receivedNumber == 1) {
        basic.showArrow(ArrowNames.East)
    } else if (receivedNumber == 2) {
        basic.showIcon(IconNames.Sad)
    } else if (receivedNumber == 3) {
        basic.showIcon(IconNames.Happy)
    } else if (receivedNumber == 4) {
        basic.showArrow(ArrowNames.South)
    } else if (receivedNumber == 5) {
        basic.showArrow(ArrowNames.North)
    } else if (receivedNumber == 6) {
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Chessboard)
            basic.showIcon(IconNames.Diamond)
        }
    }
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showArrow(ArrowNames.South)
    radio.sendNumber(tiltUp)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showArrow(ArrowNames.West)
    radio.sendNumber(tiltLeft)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showIcon(IconNames.Happy)
    radio.sendNumber(faceUp)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showIcon(IconNames.Sad)
    radio.sendNumber(faceDown)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Chessboard)
        basic.showIcon(IconNames.Diamond)
        radio.sendNumber(shake)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showArrow(ArrowNames.East)
    radio.sendNumber(tiltRight)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showArrow(ArrowNames.North)
    radio.sendNumber(tiltDown)
})
let shake = 0
let tiltDown = 0
let tiltUp = 0
let faceUp = 0
let faceDown = 0
let tiltLeft = 0
let tiltRight = 0
basic.showIcon(IconNames.Happy)
radio.setGroup(40)
tiltRight = 1
tiltLeft = 0
faceDown = 2
faceUp = 3
tiltUp = 4
tiltDown = 5
shake = 6
