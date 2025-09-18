setGainCurve(x => Math.pow(x,2))


setCps(150/60/4)


$:stack(
   s("jazz").struct("1 1 0 [0 1] 0 1 1 0").lpf(4000).distort("2").gain(0.8).pan(1),
   s("bd hh sd ").lpf(2000).distort("3"),
   polymeter("c eb g", "c2 g2").note().gain(1.50),
   polymeter("c3 f3 g3 ab3 eb3 g4", "c3 ab3").note().gain(1.20))