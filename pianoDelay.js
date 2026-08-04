setcpm(80/4)

let piano = stack(
  note(`<[e4 f#4!2  c4 a4 d3 [bb3 c4]]
       [e3 [g3, bb3, c3] g4 ~ c3 [d3, f3]]
       [g3 f5 ~ [a4, d4, bb4] [e3 c2!2] c4]
       [[c3/2]],
        
       [e2 c2 d2 bb2 [a3, c3] ]
       [g3 c3 [e4, g4] [g3 bb4]]
       [d2! [a4 ~ c2] f3!]
       [g3/2]>`).s("piano").delay(".25").pan(.61))


let voices = stack(note("<e4 c4 bb3>").s("gm_choir_aahs").pan(.25).gain(.35).room(.5).rsize(1))

arrange([4,stack(piano,voices)])