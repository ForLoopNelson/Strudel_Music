setcpm(90/4 )
let piano = stack(
  note(`<[d4 [f4 a4] d3 [bb3 c4]]
       [e3 [g3 bb3 a4] g4 ~ c3 [d3 f3]]
       [g3 f5 ~ [a4 d4 bb4] [e3 c4] c4]
       [[c3/2]],
        
       [e4 [c3 c4] c3 a2]*2
       [g3 c3 [e4] [g3 bb4]]
       [d2! [a4 ~ c2] f3!]
       [g3/2]>`).s("piano"))

let str = stack(note("d4 [a3 bb3] e4").s("gm_synth_strings_2"))

arrange([4,stack(piano,str)])