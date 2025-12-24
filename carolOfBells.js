//first attempt 

setcpm(140/8)

let p1 = stack(
  note("bb3 a3 bb3 g3 bb3 a3 bb3 g").s("piano"),
  note("bb3 a3 bb3 g3 bb3 a3 bb3 g").s("gm_tubular_bells")
)

let p2 = stack(
  note("d3 c3 d3 bb3 d3 c3 d3 bb3").s("piano")
)

let p3 = stack(
  note(`g3 g3 g3 f3 eb3 d3 d3 d3 c3 bb3 c3 c3 c3 d3 c3 g3 g3 g3 g3 s3 e3 f#3 g3 a3 bb3 c3 d3 c3 bb3`).s("gm_tubular_bells")
)



arrange([2,p1],[2,p2],[2,p3])