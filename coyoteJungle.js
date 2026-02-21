setcpm(180/4 )


let drums = stack(s("bd:1").beat("0,7?,10",16).duck("2"),
             s("sd:2").beat("4,8?,12,14",16),
             s("hh:8!8").linger("<.25 .5 .125>").bank("akaimpc60").orbit(2))

let synth1 = stack(note("<[b3,d3] [d3,f#3] [cb3, e3]>").s("gm_lead_8_bass_lead").clip("<.5 .4 1 2>"))

let synth2 = stack(note("d3 a3 d3 a4 d3!2 b2 c3!2 d4").slow(3).transpose(12).s("z_sine").clip("<.5 .4 1 2>").pan(.35))
               

arrange([4,stack(drums,synth1,synth2)])