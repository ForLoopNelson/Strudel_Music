setGainCurve(x => Math.pow(x,2))


setCps(140/60/4)



$drums:stack(
   s("<bd sd, hh ~ hh>*4").bank("bossdr110").lpf(2000).distort("1").gain(0.7),
   s("bd hh sd ").lpf(1000).distort("2"))

$poly:stack(
   polymeter("c eb g", "c2 g2 bb2 c4").note().gain(1.50),
   polymeter("c3 f3 g3 ab3 eb3 g4", "c3 ab3").note().gain(1.20))

$pad:stack(note("c2 f3 g3 [c4 eb4 g4]").add(note(perlin.range(0,.5))).clip(2).s("gm_cello").release("<2 1 .5 .25>"),
           note("[eb4 g4] c3 g2 c2").add(note(perlin.range(0, .8))).clip(1).s("gm_epiano1"))