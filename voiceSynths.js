

setCpm(110/4)


// $drums:


// $bass:

let synth = stack(note("<e4 e5 c#4 b4>").s("gm_pad_halo"),
              note("[e2, a] b2 e@3 a#2 e /2").s("gm_pad_sweep"),
              note("<e2 e2 a#3 b3 c#2>").s("gm_pad_bowed"))

let voice = stack(note("e e f#3 a# c4 e4").fast(1).s("gm_voice_oohs"),
              note("[e g# b] e3 a#4").s("gm_synth_choir"))

arrange([2,stack(voice,bass)],[4,stack(drums,voice,synth)])