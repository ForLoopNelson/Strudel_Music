//attempt to make a lofi ish chill beat

setcpm(70/4)

let drums = stack(s("bd:3").beat("0,3?,10",16).duck("3"),
             s("sd:8").beat("4,12",16),
             s("hh:6").beat("0,1,2,4?,6,8?,10,13,20,21,22,23,24,26,29?,32",32).bank("mc303"))

let pad1 = stack(note("d2!2 f#3 a4 d3 d2 d3 d2").s("gm_music_box"),
      note("d3/2 g2 b2 c#3 d3").s("gm_pad_choir"))

let pad2 = stack(note("d5 a3 e4 f#3 d4!2 g#3 d4").s("gm_epiano2"),
      note("d3/2 g2 b2 c#3 d3").s("gm_pad_halo"))








arrange([4,stack(drums,pad1,pad2)])