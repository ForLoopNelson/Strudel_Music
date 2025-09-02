setcpm(110/4 )
//piano time!
stack(

 s("bd bd,bd*8").bank("tr808").pan(1),
 s("bd ~,cp*2").bank("alesishr16").pan(2).gain(.02),
 s("~ sd,hh*10").s("gm_synth_drum").lpf("2000").crush("9").delay("<0 .23 .5 0>")._scope(),

  
 n(rand.range(0,12).segment(8))
.scale("F:minor")
.s("piano").delay("<0 .25 .5 1>")._scope(),

   n(rand.range(0,12).segment(8))
.scale("F:minor")
.s("gm_tremolo_strings").delay("<2 .35 0 1>").lpf("2000").gain(.54)
)

