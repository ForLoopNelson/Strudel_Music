setcpm(100/4)

let drum = stack(s("bd:1").beat("0,4?,10",16).duck("3"),
             s("sd:2").beat("2,8?,12",16),
             s("hh:12!16").linger("<.15 .1 .12>").bank("akaimpc60").orbit(4)
  
)

let drums = stack(s("bd:1").beat("0,7?,10",16).duck("2"),
             s("sd:2").beat("4,8?,12,14",16),
             s("hh:12!16").linger("<.25 .5 .125>").bank("akaimpc60").orbit(3))



let synthFreq = stack(
  freq("<200 [240,800, 600 <400, 450, 200, 1000>] 470 [500,<300 1270 312 470>]>*8").s("gm_glockenspiel").pan(.45).gain(.55),
  freq("<600 [300,200] 600 [800,<300 450 650 720>]>*4").s("sqr").seg(16).lpf(tri.range(600, 3000).slow(2)).gain(.45).pan(.69))


let organs = stack(
  freq("<350 [375] 320 [500 790]>*4").s("gm_percussive_organ").pan(.26).transpose("<2 -1 2 1>")
)


let bass = stack(
  freq("<300 [500 540] 470 500 >*4").s("gm_lead_8_bass_lead").gain(.48).pan(.78).transpose("<1 -2 0 2>")
)

let synthBreak = stack(
  freq("<600 [300,200] 600 [800,<300 450 650 720>]>*4").s("z_sine").seg(16).lpf(tri.range(300, 3000).slow(3)).gain(.45).pan(.49)
)





arrange([2,stack(synthFreq,organs)],
        [4,stack(bass,synthFreq,organs,drums)],
        [2,stack(bass.crush("<4 7>"),synthBreak.transpose("<-1 2 0 1>"), drum)])