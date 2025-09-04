//Attempt to use layer and set synth stack and other insturments to use in arrange()

setcpm(100/4 )



stack (
note("<d3 a2 d2 g2>").layer(
x=>x.s("z_sawtooth").vib(4).lpf(2000),
x=>x.s("pulse").add(note(9))
).scope(),

note("d5 f5 a5 [d3, g3]")
.sound("piano, gm_electric_guitar_muted")
)