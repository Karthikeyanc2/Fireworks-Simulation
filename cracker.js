class cracker {
  constructor() {
    this.bomb = new bomb(random(width), height);
    this.exploded = false
    this.particles = [];
    this.hue = random(-30, 240)
  }
  update() {
    if (!this.exploded) {
      this.bomb.applyforce(this.bomb.gravity)
      this.bomb.update();
      if ((this.bomb.vel.y + random(-25, 5)) > 0) {
        this.exploded = true
        this.explode()
      }
    } else {
      for (var i = 0; i < this.particles.length; i++) {
        this.particles[i].applyforce(this.particles[i].gravity)
        this.particles[i].update()
      }
    }
  }
  explode() {
    let coldiff = random(30)
    for (var i = 0; i < 100; i++) {
      this.particles.push(new element(this.bomb.pos.x, this.bomb.pos.y, this.hue, coldiff))
      this.particles[i].vel.x += this.bomb.vel.x * random(6)
    }
  }
  show() {
    if (!this.exploded) {
      this.bomb.show(255);
    } else {
      for (var i = 0; i < this.particles.length; i++) {
        this.particles[i].show();
      }
    }
  }
  dead() {
    if (this.exploded) {
      for (var i = 0; i < this.particles.length; i++) {
        if (this.particles[i].life > 0) {
          return false
        }
      }
      return true
    }
  }
}