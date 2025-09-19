setGainCurve(x => Math.pow(x,2))


setCps(140/60/4)


DRUMS:stack(
   s("<bd sd, hh ~ hh>*4").bank("bossdr110").lpf(2000).distort("1").gain(0.7),
   s("bd hh sd ").lpf(1000).distort("2"))

POLY:stack(
   polymeter("c eb g", "c2 g2").note().gain(1.50),
   polymeter("c3 f3 g3 ab3 eb3 g4", "c3 ab3").note().gain(1.20))

PAD:stack(note("c2 f3 [c4 eb4 g4]").add(note(perlin.range(0,.5))).clip(2).s("gm_fx_crystal").release("<2 1 .5 .25>"))