function Bird(x, y, color) {
  this.x = x;
  this.y = y;
  this.color = color;
  this.gravity = .8;
  this.velocity = 0;
  this.jumpAmount = -15;

  this.show = function() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, 32+floor(random(-10,10)));

  }

  this.jumpBird = function(updown) {
    this.velocity += this.jumpAmount*updown;
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;
    if (this.y > height - 16) {
      this.y = height - 16;
      this.velocity = 0;
    } else if (this.y < 0 + 16) {
      this.y = 16;
      this.velocity = 0;
    }
    //if(this.y>=height-16){
    //  youLose()
    //}
  }



}
