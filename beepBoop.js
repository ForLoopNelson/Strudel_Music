//add more melodies. panning and maybe change the drum samples


setcpm(70/4/2)

let drums = stack(s("bd:2").beat("0,2,4,6,8,10,11",12),
                  s("sd:2").beat("1,3,5,7,9",12)).bank("krz")

let hh = stack(s("hh:4!32").bank("ace"))

let melody = stack(
             note("e e2 e5 f# f#4 a2 a4 e3 b2").fast(4).s("gm_lead_2_sawtooth"),
             note("e3!5 d3 e2!5 f#3 a3 a3 e4@2").s("gm_fretless_bass"))



stack(drums,arrange([2,melody],[4,stack(hh,melody)]))