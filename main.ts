input.onPinPressed(TouchPin.P0, function () {
    control.reset()
})
let botaoNaoPrecionado = true
basic.forever(function () {
    while (botaoNaoPrecionado) {
        if (input.pinIsPressed(TouchPin.P1)) {
            basic.showString("A")
            basic.pause(100)
            botaoNaoPrecionado = false
        } else if (input.pinIsPressed(TouchPin.P2)) {
            basic.showString("B")
            basic.pause(100)
            botaoNaoPrecionado = false
        }
    }
})
