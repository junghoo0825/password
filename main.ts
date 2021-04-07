input.onButtonPressed(Button.A, function () {
    리스트.insertAt(_0자리수, _0)
    _0자리수 += 1
})
input.onButtonPressed(Button.B, function () {
    리스트.insertAt(_0자리수, _1)
    _0자리수 += 1
})
let 리스트: number[] = []
let _0자리수 = 0
let _1 = 0
let _0 = 0
_0자리수 = 1
_0 = 0
리스트 = [0, 0, 0, 0]
_1 = 1
basic.forever(function () {
    if (_0자리수 == 5) {
        if (리스트[1] == 0) {
            if (리스트[2] == 1) {
                if (리스트[3] == 0) {
                    if (리스트[4] == 0) {
                        basic.showIcon(IconNames.Yes)
                        _0자리수 = 1
                    }
                }
            }
        }
    } else {
        basic.showIcon(IconNames.No)
    }
})
