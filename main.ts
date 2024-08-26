input.onPinPressed(TouchPin.P0, function () {
    control.reset()
})
let botaoNaoPrecionado = true
basic.forever(function () {
    for (let index = 0; index < botaoNaoPrecionado; index++) {
        if (input.pinIsPressed(TouchPin.P1)) {
            basic.showString("A")
            music.ringTone(262)
            botaoNaoPrecionado = false
        } else if (input.pinIsPressed(TouchPin.P2)) {
            basic.showString("B")
            music.ringTone(523)
            botaoNaoPrecionado = false
        }
    }
})
