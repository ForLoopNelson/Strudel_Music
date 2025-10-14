setcpm(70/4)

let noise = stack(note("ab cb eb gb ab bb db ab2@3").s("gm_pad_poly"),
                  note("ab2!3 eb2!3 db!3 cb!3").s("gm_pad_warm"))

let noise2 = stack(note("ab cb eb gb ab bb db ab2@3").s("gm_pad_poly").jux(rev).distort("<1.9>").pan(.37).gain(.13),
                  note("ab2!3 eb2!3 db!3 cb!3").s("gm_pad_warm").pan(.77).crush("<5.5>"))


let highs = stack(note("ab4@3 cb4 db3 ab3@2 cb3@3").s("gm_glockenspiel").pan(.75),
                  note("ab4@3 db4!4 cb4@2").s("gm_synth_choir"),
                  note("ab2").s("gm_vibraphone").decay(.2).sustain("<.9>").pan(.44))

let beeps = stack(note("ab4!3 eb5 fb5 eb4 cb4").s("gm_music_box").pan(.25))







stack(arrange([2,noise],[4,stack(noise2,highs,beeps)]))