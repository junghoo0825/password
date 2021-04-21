input.onButtonPressed(Button.A, function () {
    리스트.insertAt(_0자리수, _1)
    _0자리수 += 1
})
input.onButtonPressed(Button.AB, function () {
    리스트 = [0, 0, 0, 0]
})
input.onButtonPressed(Button.B, function () {
    리스트.insertAt(_0자리수, _0)
    _0자리수 += 1
})
let 리스트: number[] = []
let _0자리수 = 0
let _1 = 0
let _0 = 0
pins.digitalWritePin(DigitalPin.P16, 0)
_0자리수 = 1
_0 = 0
리스트 = [0, 0, 0, 0]
_1 = 1
basic.forever(function () {
    if (리스트.length == 4) {
        if (리스트[1] == 1) {
            if (리스트[2] == 0) {
                if (리스트[3] == 1) {
                    if (리스트[4] == 0) {
                        pins.digitalWritePin(DigitalPin.P16, 1)
                    }
                }
            }
        }
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
