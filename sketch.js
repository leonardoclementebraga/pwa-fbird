var bird;
var pipes = [];
var speed = 4;
var endGame = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bird = new Bird(45, height / 2, 255);
  //bird1 = new Bird(40, height / 2, 20);
  pipes.push(new Pipe());
}

function draw() {
  mostrarPontuacao()
  youWin()
  desenhaAtrapalha()
  /*Motion sickness: background(0, 100);*/
  /*Slow motion: background(0, 60);*/
  background(0, 20);
  //bird1.show();
  //bird1.update();
  if (frameCount % 100-floor(speed) == 0) {
    if(endGame == false){
      pipes.push(new Pipe());
    }
    speed+=.5
  }
  
  if(endGame == false){
    bird.show();
  }
  bird.update();
  if(keyIsDown(UP_ARROW)){
    bird.jumpBird(1);
  }
  if(keyIsDown(DOWN_ARROW)){
    bird.jumpBird(-1);
  }
  if(pipes.length>0){
    for (var i = pipes.length - 1; i >= 0; i--) {
      pipes[i].show();
      pipes[i].update();
      if (pipes[i].hits(bird) /*|| pipes[i].hits(bird1)*/) {
        if(endGame == false){
          youLose()
        }
        console.log('HIT');
      }
      if (pipes[i].isOffScreen()) {
        pipes.splice(i, 1);
      }
    }
  }
  desenhaAtrapalha()
}

function keyPressed() {
  if (key == ' ') {
    bird.jumpBird(1);
    console.log('SPACE');
  }
  /*if (key == '1') {
    bird1.jumpBird();
    console.log('A');
  }*/
}

function mousePressed(){
  bird.jumpBird(1);
}

function desenhaAtrapalha(){
  push()
  endGame ? fill(floor(random(0,255)), floor(random(0,255)), floor(random(0,255))) : fill(255)
  ellipse(floor(random(0,width)), floor(random(0,height)), floor(random(25,75)))
  pop()
}


function youLose(){
  push()
  noStroke()
  textSize(24)
  fill(220,80,100)
  text('YOU LOSE!', width/3, height/2)
  pop()
  noLoop()
  setInterval(5000)
  location.reload(false)
}

function youWin(){
  if(speed >= 104){
    push()
    noStroke()
    textSize(24)
    fill(80,220,100)
    text('YOU WIN!', width/3, height/2)
    pop()
    endGame = true;
  }
}

function mostrarPontuacao(){
  push()
  strokeWeight(2)
  textSize(18)
  fill(255)
text(`SCORE: ${floor(speed)-4}`, 20, 40)
  pop()
}