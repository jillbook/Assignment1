var x = 0;
var y = 0;

function setup() {
createCanvas(500,500);

for (var x=0; x<=500; x=x+50) {
  ellipse(x,y,20,20);
  for (var y=0; y<=500; y=y+50) {
    ellipse(x,y,20,20);
  }
}
}

function draw() {

}
