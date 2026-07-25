setcpm(100/4)


let drums = stack(s("bd:1").beat("0,7?,10",16).duck("2"),
             s("sd:2").beat("4,8?,12,14",16),
             s("hh:12!16").linger("<.25 .5 .125>").bank("akaimpc60").orbit(3))



let synthFreq = stack(
  freq("<200 [240,800, 600 <400, 450, 200, 1000>] 470 [500,<300 1270 312 470>]>*8").s("gm_glockenspiel").pan(.45).gain(.55),
  freq("<600 [300,200] 600 [800,<300 450 650 720>]>*4").s("sqr").seg(16).lpf(tri.range(600, 3000).slow(2)).gain(.45).pan(.69))


let organs = stack(
  freq("<350 [375] 320 [500 790]>*4").s("gm_percussive_organ").pan(.26).transpose("<2 -1 2 1>")
)






arrange([4,stack(synthFreq,organs,drums)])