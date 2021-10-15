var hr,mn,sc

function setup() {
  createCanvas(800,800);
  angleMode(DEGREES)
}

function draw() {
  background(0);
  translate(400,400)
  rotate(-90)  
  drawSprites();

  hr = hour()
  mn = minute()
  sc = second()

  //angles
  scAngle = map(sc,0,60,0,360)
  mnAngle = map(mn,0,60,0,360)
  hrAngle = map(hr % 12,0,12,0,360)

  //lines 
  push()
  rotate(scAngle)
  stroke("red")
  strokeWeight(5)
  line(0,0,100,0)
  pop()

  push()
  rotate(mnAngle)
  stroke("green")
  strokeWeight(6)
  line(0,0,75,0)
  pop()

  push()
  rotate(hrAngle)
  stroke("blue")
  strokeWeight(7)
  line(0,0,55,0)
  pop()

  // arc 
  strokeWeight(8)
  noFill()
  stroke("red")
  arc(0,0,300,300,0,scAngle)

  stroke("green")
  arc(0,0,270,270,0,mnAngle)

  stroke("blue")
  arc(0,0,250,250,0,hrAngle)
}