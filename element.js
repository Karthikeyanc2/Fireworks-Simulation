class element extends bomb {
  constructor(x, y, hue, coldiff) {
    super(x, y, hue + random(-coldiff, coldiff))
    this.vel.x = random(-5, 5)
    this.vel.y = random(-5, 5)
    this.applyforce(createVector(random(-8, 8), random(-8, 8)))
  }
  update() {
    super.update()
    this.life -= this.liferate
    this.vel.mult(0.92)
  }
}