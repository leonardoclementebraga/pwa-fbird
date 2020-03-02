function Pipe() {
  this.bottom = random(height / 2);
  this.top = random(height / 2);
  this.x = width;
  this.w = 20;
  this.speed = speed;
  this.highlight = false;

  this.show = function() {
    noStroke();
    if (this.highlight) {
      fill(255, 100, 100);
    } else {
      fill(255);
    }
    rect(this.x, 0, this.w, this.top+floor(random(-25,25)));
    rect(this.x, height - this.bottom+floor(random(-25,25)), this.w, this.bottom);
  }

  this.update = function() {
    this.x -= this.speed;
  }

  this.isOffScreen = function() {
    return (this.x < -this.w);
  }

  this.hits = function(bird) {
    if (bird.y+16 < this.top || bird.y+16 > height - this.bottom)
      if (bird.x+16 > this.x && bird.x+16 < this.x + this.w) {
        this.highlight = true;
        return true;
      }
      this.highlight = false;
  }

}
