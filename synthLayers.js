//Attempt to use layer and set synth stack and other insturments to use in arrange()

setcpm(100/4 )

let drums =
  stack(s("lt, bd bd*4").bank("bossdr550"),
       s("~ sd,hh*8").bank("akaixr10").lpf("5000"))


let synth =
stack (
note("<d3 a2 d2 g2>").layer(
x=>x.s("z_sawtooth").vib(4).lpf("2000"),
x=>x.s("pulse").add(note(9))
),

note("d5 f5 a5 [d3, g3]")
.s("piano, gm_electric_guitar_muted")
)

stack(drums,arrange([4,synth])
  )