
var monkey , monkey_running,ground,groundImage;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  groundImage = loadImage("OIP.jpg")
 
}



function setup() {
  createCanvas(400,400)
  
  monkey=createSprite(50,300,25,25)
  monkey.addAnimation("g",monkey_running)
  monkey.scale=0.1;
  ground=createSprite(200,395,1800,20)
  ground.velocityX=-5
  ground.addImage("gI", groundImage)
  ground.x = ground.width /2;
  
  if(frameCount % 300 === 0)
  {
  obstacle=Math.round(random)
  obstacle=createSprite(50,300,25,25);
  obstacle.addImage ("ob",obstaceImage);
  obstacle.scale=0.1 
  obstacle.velocityX=-5
  }
}



function draw() {
background("pink")
  
      if (ground.x < 0){
      ground.x = ground.width/2;
    }
  monkey.collide(ground)
 
  
  spawnbanana();
  drawSprites()
   if (mousePressedOver(ground) || keyDown("space") || touches >0 && monkey.y<50)
{ 
  monkey.velocityY=-20
} 
  monkey.velocityY=monkey.velocityY+0.20*5
console.log(monkey.y)
}

function spawnbanana() 
{
   if (frameCount % 80 === 0) {
     banana = createSprite(600,100,40,10);
    banana.y = Math.round(random(20,100));
    banana.addImage("banana",bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -6;
   }

}





