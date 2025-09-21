setcpm(170/8)

const drums =
 stack(
  s("[bd sd]*2,hh*8")
.cutoff(sine.range(500,6000)).bank("akaixr10"))

const synth1 = 
  stack(
 note("d d d# d".fast(2)).s("sawtooth").tremolosync("4").tremoloskew("<1 .5 0>"),
 note("f2 f2 f# f3".fast(2)).s("gm_electric_bass_finger")
)

const synth2 = 
  stack(
    note("d d g2 d#").fast(2).s("gm_pad_bowed"),
    note("f4 f2 d#3 d").fast(2).s("gm_electric_bass_pick"),
    note("[d f a] d3 d").s("gm_lead_6_voice")
  )


stack(drums,arrange([4,synth1],[4,synth2]))
