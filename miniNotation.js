setcpm(110 / 4)

let piano = stack(
  note(`<[c4 [f#4 a4] d3 [b3 c4]]
       [e3 [g3 b3 a4] g4 ~ c3 [d3 f#3]]
       [g3 f#5 ~ [a4 d4 b4] [e3 c4] c4]
       [[c3/2]],
        
       [e4 [c3 c4] c3 a2]*2
       [g3 c3 [e4] [g3 b4]]
       [d2! [a4 ~ c2] f#3!]
       [g3/2]>`).s("piano"))

let poly =
  stack(
    polymeter("c f#3 g", "c2 g2 b2 c4").note()
      .s("gm_acoustic_guitar_nylon").jux(rev).pan(.45).gain(.70).decay(.4).sustain("<.8>"),
    polymeter("c3 f#3 g3 a3 e3 g4", "c3 a3").note()
      .s("gm_acoustic_guitar_nylon").jux(press).pan(.25).gain(.90).release("<1 .15>").delay(".4"))

let intro =
  stack(
    note("c2/2").s("gm_pad_choir").gain(1.8).decay(.5).sustain("<.6>").delay(".2"))

let strings =
  stack(
    note("c2/4 g3/2 d4/2 c2").s("gm_pad_warm").gain(.5).pan(.35)
  )


arrange([4, stack(piano, intro, strings)], [6, stack(poly, strings)])