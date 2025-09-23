//attempt to learn break beats from watching clips of switch angel

setGainCurve(x => Math.pow(x,2))


setCpm(170/4)


$drums:stack(s("bd:1").beat("0,7?,10",16).duck("3"),
             s("sd:2").beat("4,12",16),
             s("hh:4!8").bank("akaimpc60").orbit(2).spiral({steady: .75}))


$bass: stack(s("supersaw!8").note("<c# f d# [d# a#2]>/2".sub(12)).orbit(3).gain(1.06)._scope(),
             n(rand.range(0,12).segment(8)).scale("E:major").s("gm_lead_7_fifths").pan(.6).gain(.80))

$pad:  s("gm_orchestral_harp").note("<c#4 d#5 f4 c#4 e4 c#3>").fast(4).pan(.18).gain(.65)