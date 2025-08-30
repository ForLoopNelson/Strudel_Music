setcpm(110/4 )
//First Try!
stack(
sound("bd*4, [- cp]*2, [- hh]*4").bank("RolandTR909"),

sound(`
[-  -  oh - ] [-  -  -  - ] [-  -  -  - ] [-  -  -  - ],
[hh hh -  - ] [hh hh hh - ] [hh -  hh - ] [hh -  hh - ],
[-  -  -  - ] [cp -  -  - ] [-  -  -  - ] [cp -  -  - ],
[bd -  -  - ] [-  -  -  bd] [-  -  bd - ] [-  -  -  bd]
`).
note("db eb gb ab bb ~ ~ bb db").sound("organ_8inch").release(4).sustain(1.25),
 note("db eb gb ab bb").sound("piano") ,
  note("db ~ ~ ab").sound("gm_pad_choir"))