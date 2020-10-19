var ground;
var groundImg;
var rand;
var balloonGroup, balloon1, balloon2, balloon3, balloon4;

function preload(){
  groundImg = loadImage("ground.png");
  balloon1 = loadImage("balloon1.png");
  balloon2 = loadImage("balloon2.png");
  balloon3 = loadImage("balloon3.png");
  balloon4 = loadImage("balloon4.png");
}

function setup() {
  createCanvas(800,400);
  ground = createSprite(400, 375, 800, 50);
  ground.addImage("ground", groundImg);
  ground.scale = 0.25;

  balloonGroup = createGroup();
}

function draw() {
  background(0,196,255);
 // console.log(balloon1)
  spawnBalloons();
  drawSprites();
}

// Function spawn balloon 
function spawnBalloons() {
  if(frameCount % 60 === 0) {
    var balloon = createSprite(random(40,760),350,30,40);
    //balloon.debug = true;
    balloon.velocityY = -6;

    rand = Math.round(random(1,4));
   // balloon.addImage(balloon1);
    //generate random balloons
    switch(rand) {
      case 1: balloon.addImage(balloon1);
              break;
      case 2: balloon.addImage(balloon2);
              break;
      case 3: balloon.addImage(balloon3);
              break;
      case 4: balloon.addImage(balloon4);
              break;
      default: break;
    }
    textSize(20);
    text("hello", balloon.x, balloon.y);

    console.log(balloon);
    //assign scale and lifetime to the balloon           
   balloon.scale = 0.5;
    balloon.lifetime = 300;
    //add each balloon to the group
    balloonGroup.add(balloon);
  }
}
