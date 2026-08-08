setcpm(80/4)

let drums =
stack(s("bd:3").beat("0,7?,10",16).duck("3"),
             s("sd:8").beat("4,12",16),
             s("hh:6").beat("0,2,4,5?,6,8?",32).bank("akaimpc60"))

let synth = stack(note("a3!3 c3 e3 f3").s("gm_synth_bass_2").seg(16).lpf("800").crush("<3.2>").jux(iter(4)).gain(.5))

let pad = stack(note("e5!2 c5!3 a4!2 d3").s("z_triangle").fast(2))

arrange([4,stack(drums,synth,pad)])