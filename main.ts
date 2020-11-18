input.onPinPressed(TouchPin.P0, function () {
    o = randint(0, 10)
    basic.showNumber(o)
    if (o <= 3) {
        basic.showIcon(IconNames.Sad)
        basic.showString("It's alright!=]")
    } else if (o <= 7) {
        basic.showIcon(IconNames.Happy)
        basic.showString("Good day!")
    } else if (o <= 10) {
        basic.showIcon(IconNames.Surprised)
        basic.showString("Lucky day!")
    } else {
    	
    }
    basic.clearScreen()
})
let o = 0
basic.showString("Today's Fortune")
basic.forever(function () {
	
})
