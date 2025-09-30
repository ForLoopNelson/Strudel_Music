setCpm(110/4)

let drumIntro = 
    stack(s("bd:1").beat("0,3,8,12",16),
          s("sd:2").beat("2,6,10?",16),
          s("hh:4!8").bank("ddr30"))

let drums =
    stack(s("bd:1").beat("0,7?,10,14?",16),
             s("sd:2").beat("4,12",16),
             s("hh:4!8").bank("dr220"))


let bass = 
    stack(note("e3 g#3 d#3 [a4, c#4]").sound("gm_cello, gm_synth_bass_2"),
              note("e!2 f#3 a# c4 e4!2 d#4").fast(2).rev().s("gm_voice_oohs"))

let synth = 
    stack(note("<e4 e5 c#4 b4>").s("gm_pad_halo"),
              note("[e2, a, c2]/2 b2 e@3 a#2 e /2").s("gm_pad_sweep"),
              note("<e2 e2 a#3 b3 c#2>").s("gm_pad_bowed"))

let voice = 
    stack(note("e!2 f#3 a# c4 e4!2 d#4").fast(1).s("gm_voice_oohs"),
              note("[e g# b] e3 a#4").s("gm_synth_choir"))

let voice2 = note("e g# b e4 c#5 d#4").s("gm_pad_choir")

arrange([2,bass],[4,stack(drums,voice,synth)])