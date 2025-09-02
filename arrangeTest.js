cpm(120/4)

let f1 =
  stack(
    n(rand.range(0,12).segment(6))
      .scale("F:minor")
      .s("gm_tremolo_strings")
      .gain(0.54)
      .lpf("<200 500 1000 2000 4000 6000>")
      ._scope()
  )

let f2 =
  stack(
    n(rand.range(0,12).segment(1))
      .scale("D:minor")
      .s("gm_tremolo_strings")
      .gain(0.54)
      .cutoff(sine.range(800,8000))
  )

let f3 =
  stack(
    n(rand.range(0,12).segment(4))
      .scale("D:minor")
      .s("gm_music_box")
      .lpf(2000)
      .lpq("<0 10 20 30>")
  )

let f4 =
  stack(
    n(rand.range(0,12).segment(1))
      .scale("D:minor")
      .s("gm_tremolo_strings")
      .gain(0.54)
      .cutoff(sine.range(800,8000))
  )

arrange([ [1,f1], [1,f2], [1,f3], [1,f4] ])
