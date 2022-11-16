basic.forever(function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    for (let index = 0; index <= 10; index++) {
        music.playTone(392, music.beat(BeatFraction.Whole))
        basic.showNumber(10 - index)
    }
})
