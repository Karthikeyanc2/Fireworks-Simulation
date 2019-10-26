class bomb {
  constructor(x, y, hue) {
    this.pos = createVector(x, y)
    this.vel = createVector(random(-2, 2), random(-15, -22))
    this.acc = createVector(0, 0)
    this.life = 255
    this.liferate = random(4, 14)
    this.gravity = createVector(0, random(0.15, 0.45))
    this.hue = hue
  }
  show() {
    stroke(this.hue, 255, 255, this.life)
    point(this.pos.x, this.pos.y)
  }
  update() {
    this.vel.add(this.acc)
    this.pos.add(this.vel)
    this.acc.mult(0)
    if (this.vel.y > 0) {
      this.exploded = true
    }
  }
  applyforce(force) {
    this.acc.add(force)
  }
}