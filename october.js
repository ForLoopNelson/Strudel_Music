//it's spooky season. let's make a fun industrial synth jam!


setcpm(150/4)

let drums =
stack(s("bd:3").beat("0,7?,10",16).duck("3"),
             s("sd:8").beat("4,12",16),
             s("hh:6").beat("0,2,4,5?,6,8?",32).bank("akaimpc60"))


let tone =
stack(note("d2!2 f#4 d2 d3 d2 d3 d2").s("gm_synth_bass_1"))








stack(drums,arrange([4,tone]))