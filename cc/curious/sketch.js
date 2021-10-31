var xoff = 0;
var yoff = 1;
let slider;
let slider2;


function setup() {
  let cnv = createCanvas(400, 400);
  // cnv.position(windowHeight/2-200, windowWidth/2-200);
  slider=createSlider(0, 100, 100);
  slider.position(0, 420);
  slider2=createSlider(0,100,100);
  slider2.position(0, 440);
  slider.style('width', '400px');
  slider2.style('width', '400px');

}

function draw() {
  background(25);
  let val2 = slider2.value();
  let val = slider.value();
  val = val/100;
  val2 = val2/100;

  var x = map(noise(xoff), 0,1,0,400);
  var y = map(noise(yoff), 0,1,0,400);
  var rc = random(0,255);
  xoff += 0.02*val;
  yoff -= 0.02*val2;

  noStroke();

  z=0;
  for (let i = 0; i < 2; i++) {
  z=z+80;
  fill(255, 203, 100);
  rect(x/2+z, y/4, 40,40);

  fill(0, 0, 0);
  rect(x/2+z+15+x*0.01, y/4+15+y*0.03, 20,20);

}





  fill(245, 150, 50);
  rect(x, y, 20,20);

  fill (255);
  rect(x, y*0.2+300, 100,10);

}
