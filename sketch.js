let x=0;
let y=0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(128, 0, 128);
  fill(255);
  
  
  //moons
  fill(152, 175, 214);
  ellipse(y + 40,40,70,);
  y=y+1.5
  if (y>400){
  y=0
    }
  fill(191, 142, 157);
  ellipse(x + 90,80,70,);
  x=x+1
if (x>400){
  x=0
}
  
  //legs
  fill(67, 67, 97);
  rect(100,200,15,100,);
  rect(285,200,15,100,);
  
  // body
  fill(67, 67, 97);
  ellipse(200,200,200,100,);
  
  //ground
  fill(53, 27, 125);
  rect(0,300,420);
  stroke(0);
  
  //eyeballs
  fill(171, 162, 3);
  ellipse(200,200,25,25,);ellipse(200,200,15);
  line(150,120,151,155);
  ellipse(150,120,25);ellipse(150,120,15);
  line(251,120,250,156);
  ellipse(250,120,25,);ellipse(250,120,15);
  line(201,149,200,100);
  ellipse(200,100,25,);ellipse(200,100,15);
  
  //pupills
  fill(62, 115, 65);
  ellipse(200,200,15);
  ellipse(150,120,15);
  ellipse(250,120,15);
  ellipse(200,100,15);
  
  
  //bumps
  fill(67, 67, 97);
  ellipse(130,200,5);
  ellipse(140,230,5);
  ellipse(145,170,5);
  ellipse(170,190,5);
  ellipse(200,230,5);
  ellipse(250,200,5);
  ellipse(280,190,5);
  ellipse(230,175,5);
  ellipse(235,235,5);
}
  