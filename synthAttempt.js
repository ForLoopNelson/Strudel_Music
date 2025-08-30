setcpm(90/4 )
//synth stack!
stack(
 s("bd sd,hh*16").bank("mpc1000"),
 n("0 1 [4 3] 2 0 2 [~ 3] 4").sound("metal").pan(0).lpf("4000"),
 n("0 1 [4 3] 2 0 2 [~ 3] 4").sound("metal").pan(1.2 ).lpf("2000").delay("<0 .25 .5 1>"),
 n("0 1 [4 3] 2 0 2 [~ 3] 4").sound("jazz").pan(2).gain("1.24").rev(),

  note("<[g3,b3,e4] [a3,c3,e4] [b3,d3,f#4] [b3,e4,g4]>*2").sound("z_square").sustain(1.25).lpf("2000").gain("0.35")._scope(),

   note("g1 <b1 <d3 f#4>>".fast(2))
.sound("<sawtooth square triangle sine>")
._scope())