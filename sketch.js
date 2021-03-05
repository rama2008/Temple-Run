var player;
var coins;
var bg;

function preload() {
  bg = loadImage("background.jpg")
}

function setup() {
  createCanvas (600,400);
  player = new Player(50,30);
  ground = new Ground();
  ground.velocityX = -3;
}

function draw() {
  background(bg);
  player.display();
  ground.display();
  drawSprites();

}

function keyPressed(){
  if(keyCode === 32){
     player.jump();
  }
     
}