//Attempt to use layer and set synth stack and other insturments to use in arrange()

setcpm(100/4 )

let drums =
  stack(s("lt, bd bd*4").bank("bossdr550"),
       s("~ sd,hh*8").bank("akaixr10").lpf("5000").color("#899CB0")._punchcard({width:900}))


let synth =
  stack (
note("<d3 a2 d2 g2>").layer(
x=>x.s("z_sawtooth").vib(4).lpf("2000")._spiral({ steady: .50 }),
x=>x.s("pulse").add(note(9))
),

note("d5 f5 a5 [d3, g3]")
.s("piano, gm_electric_guitar_muted")._punchcard(),


n("<d3 a2 d2 g4>").layer(
      x=>x.s("gm_voice_oohs").phaser("<1 5 8 10>"),
      x=>x.s("gm_pad_choir").add(note(12))
    )
)

let synth2 = 
  stack(
    note("g2 d2 a2 d2").rev().layer(
x=>x.s("z_sawtooth").vib(4).lpf("1000"),
x=>x.s("pulse").add(note(9))
),

note("d5 f5 a5 [d3, g3]").rev()
.s("piano, gm_electric_guitar_muted")
  )


stack(drums,arrange([4,synth],[4,synth2])
  )