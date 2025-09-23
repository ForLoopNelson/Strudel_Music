//attempt to learn break beats from watching clips of switch angel

setGainCurve(x => Math.pow(x,2))


setCpm(170/4)


$drums:stack(s("bd:1").beat("0,7?,10",16).duck("3"),
             s("sd:2").beat("4,12",16),
             s("hh:4!8").bank("akaimpc60").orbit(2).spiral({steady: .75}))


$bass: stack(s("supersaw!8").note("<c# f d# [d# a#2]>/2".sub(12)).orbit(3).pan(.5)._scope(),
             n(rand.range(0,12).segment(8)).scale("E:major").s("gm_fx_rain").pan(.9).gain(1.25))