radio.onReceivedString(function (receivedString) {
    if (receivedString == "IZQ") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 40)
        basic.pause(100)
    }
    if (receivedString == "DRCHA") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
        basic.pause(100)
    }
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 40)
})
radio.setGroup(9)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 40)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString("IZQ")
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendString("DRCHA")
    }
})
