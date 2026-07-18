setcpm(100/4)

let synthFreq = stack(
freq("<200 [300,500] 400 [500,<600 670 712 670>]>*8").s("gm_glockenspiel"),
freq("<600 [300,200] 600 [800,<300 450 650 720>]>*4").s("gm_shakuhachi"))


let organs = stack(
  freq("<350 [375] 320 [500 790]>*8").s("gm_percussive_organ")
)






arrange([4,stack(synthFreq,organs)])