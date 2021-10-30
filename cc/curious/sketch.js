var xoff = 0;
var yoff = 1;


function setup() {
  let cnv = createCanvas(400, 400);
  cnv.position(windowHeight/2-200, windowWidth/2-200);

}

function draw() {
  background(25);


  var x = map(noise(xoff), 0,1,0,width);
  var y = map(noise(yoff), 0,1,0,width);
  var rc = random(0,255);
  xoff += 0.01;
  yoff -= 0.01;
  
  noStroke();
  
  z=0;
  for (let i = 0; i < 2; i++) {
  z=z+80;
  print(z);
  fill(255, 203, 100);
  rect(x/2+z, y/4, 40,40);

  fill(0, 0, 0);
  rect(x/2+z+20, y/4+20, 20,20);
  
}
  

  

  
  fill(245, 150, 50);
  rect(x, y, 20,20);
  
  fill (255);
  rect(x, y*0.2+300, 100,10);

}

