setcpm(90/4 )
let piano = stack(
  note(`<[d4 [f4, a4, c4] d3 [bb3 c4]]
       [e3 [g3, bb3, c3] g4 ~ c3 [d3, f3]]
       [g3 f5 ~ [a4, d4, bb4] [e3 c2!2] c4]
       [[c3/2]],
        
       [e2 [c2, e2, g2] e4!2 ]
       [g3 c3 [e4, g4] [g3 bb4]]
       [d2! [a4 ~ c2] f3!]
       [g3/2]>`).s("piano"))

// let str = stack(note("d4 [a3 bb3] e4 [f3@3 d2]").s("gm_synth_strings_2"),
//                 note("d3@3 a3 bb3@2").s("gm_tuba"))

arrange([4,stack(piano)])