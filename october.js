//it's spooky season. let's make a fun industrial synth jam!


setcpm(100/4)

let drums =
stack(s("bd:3").beat("0,7?,10",16).duck("3"),
             s("sd:8").beat("4,12",16),
             s("hh:6").beat("0,2,4,5?,6,8?",32).bank("akaimpc60"))



let tone =
stack(note("d2!2 f#4 d2 d3 d2 d3 d2").s("gm_synth_bass_1"),
      note("d3/2 g2 b2 c#3 d3").s("supersaw"))

let tone2 =
stack(note("d2!2 c#4 d2 d3 d2 d3 e3").s("gm_synth_bass_1"),
      note("d3/2 g2 b2 f#3 d3").s("supersaw"))

let pulse =
stack(note("d5 f#2 c#4 d4 d3 g4 d5 e5 d4 e4 c#3 ").s("pulse").fast(4).gain(.65))






stack(drums,arrange([4,stack(tone,pulse)],[4,stack(tone2,pulse.rev())]))





stack(drums,arrange([4,tone]))