setcpm(180/4 )


let drums = stack(s("bd:1").beat("0,7?,10",16).duck("2"),
             s("sd:2").beat("4,8?,12,14",16),
             s("hh:12!8").linger("<.25 .5 .125>").bank("akaimpc60").orbit(2))

let synth1 = stack(note("<[b3,d3] [d3,f#3] [cb3, e3]>").s("gm_lead_8_bass_lead"))

let synth2 = stack(note("d3 a3 d3 a4 d3!2 b2 c3!2 d4").slow(3).transpose(12).s("z_sine").clip("<.5 .4 1 2>").pan(.25))

let synth3 = stack(note("d4!3 f#4!3 e4 g#4!").s("sqr").seg(16).lpf(tri.range(500, 2500)).pan(.75))
               

arrange([2,synth1], [2,stack(synth1,synth2)],[6,stack(drums,synth1,synth2,synth3)], [4,drums])