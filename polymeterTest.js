setGainCurve(x => Math.pow(x,2))


setCps(150/60/4)


$:stack(
   s("jazz").struct("1 0 0 [0 1] 1 1 0 0").fit().lpf(2000),
   s("cp hh sd hh").lpf(2000),
   polymeter("c eb g", "c2 g2").note().gain(1.50),
   polymeter("c3 f3 g3 ab3 eb3 g4", "c3 ab3").note().gain(1.20))