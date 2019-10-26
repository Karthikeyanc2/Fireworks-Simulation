var crackers = [];

function setup() {
  frameRate(40);
  ca = createCanvas(windowWidth, windowHeight);
  ca.position(0, 0);
  mouse = createVector(mouseX, mouseY);
  crackers.push(new cracker())
  stroke(255)
  strokeWeight(1.75)
  background(0);
}

function draw() {
  colorMode(RGB);
  background(0, 0, 0, 45);
  colorMode(HSB);
  if (random(100) < 8) {
    crackers.push(new cracker())
  }
  for (var i = 0; i < crackers.length; i++) {
    crackers[i].update();
    crackers[i].show();
  }
  for (var i = crackers.length - 1; i >= 0; i--) {
    if (crackers[i].dead()) {
      crackers.splice(i, 1)
    }
  }
}