var xoff = 0;
var yoff = 1;

let mic;


function setup() {
  let cnv = createCanvas(400, 400);
  cnv.position(windowHeight/2, windowWidth/2);
  cnv.mousePressed(userStartAudio);
  textAlign(CENTER);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(25);
  micLevel = mic.getLevel();
  print(micLevel);
  
  var x = map(noise(xoff), 0,1,0,400);
  var y = map(noise(yoff), 0,1,400,0);
  var rc = random(0,255);
  xoff += micLevel;
  yoff -= micLevel/5;
  
  noStroke();
  
  fill(255, 203, 100);
  rect(x/2, y/4, 40 ,40);
  
  fill(245, 150, 50);
  rect(x, y, 20,20);

  micLevel = mic.getLevel();

  

}

