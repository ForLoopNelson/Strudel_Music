setcpm(180/4 )


let drums = stack(s("bd:1").beat("0,7?,10",16).duck("2"),
             s("sd:2").beat("4,8?,12,14",16),
             s("hh:8!8").bank("akaimpc60").orbit(2))

let synth1 = stack(note("<[b3,d3] [d3,f#3] [cb3, e3]>").s("gm_lead_8_bass_lead"))
               

arrange([4,stack(drums,synth1)])