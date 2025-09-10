setcpm(120/4)

  let f1 =
  stack(
   n(rand.range(0,12).segment(6))
.scale("F:minor")
.s("gm_music_box").gain(.54).lpf("<200 300 500 1000 4000 6000 9000>")._scope())

  let f2 =
  stack(
     n(rand.range(0,12).segment(6))
.scale("D:minor")
.s("gm_music_box").gain(.54).lpf(400).lpenv(4))

  let f3 =
  stack(
    n(rand.range(0,12).segment(4))
.scale("D:minor")
.s("gm_music_box").lpf(2000).hpf("<0 10 20 30 >"))

  let f4 =
  stack(
   n(rand.range(0,12).segment(1))
.scale("D:minor")
.s("gm_music_box").gain(.54).cutoff(sine.range(800,8000)))

  

//to have multiple patterns play in arrange. use stack
arrange([7,stack(f1,f2)],[7,f3])