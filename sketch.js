
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground, invisibleGround

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(300, 300);
  

  ground = createSprite(0, 300, 10000, 10);
    ground.velocityX = -2;
  
  monkey = createSprite(30, 270);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
 
  background("white");
  text("Score:"+ score, 500,50);
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    monkey.velocityY = monkey.velocityY +0.8
  monkey.collide(ground);
  
  if(keyDown("space")) {
    monkey.velocityY = -12;
  }
  
      score = score + Math.round(getFrameRate()/60);
  spawnbananas();
  drawSprites();
}

function spawnbananas(){
 if (frameCount % 60 === 0){
   var banana = createSprite(600,165,10,40);
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: banana.addImage(bananaImage);
              break;
      default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    banana.scale = 0.5;
    banana.lifetime = 300;
   
   //add each obstacle to the group
    bananaGroup.add(banana);
 }
}

function spawnobstacles(){
 if (frameCount % 60 === 0){
   var obstacle = createSprite(600,165,10,40);
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstacleImage);
              break;
      default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstacleGroup.add(obstacle);
 }
}


