//Global Variables
var banana_image,obstacle_image,obstacleGroup,back,player, player_running,invisibleGround, background_image;

var score = 0;

function preload(){
  background_image = loadImage("jungle.jpg");
  player_running= loadAnimation("Monkey_01.png", "Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
  banana_image = loadImage("Banana.png");
  obstacle_image = loadImage("stone.png");
}


function setup() {
  createCanvas(600,400);
  back = createSprite(0,0,800,600);
  back.addImage(background_image);
  back.scale = 2;
  back.velocityX = -2;
    
  invisibleGround = createSprite(300,350,600,10);
  if(invisibleGround.x<200){
  invisibleGround.x = invisibleGround.width/2;
    invisibleGround.velocityX = -2;
    back.x = 300;
  }
  invisibleGround.visible = false;
  
  player = createSprite(50,350,20,20);
  player.addAnimation("player_running",player_running);
  player.scale = 0.2;
  
  bananaGroup = new Group();
  stoneGroup = new Group();
  
}

function draw(){
 background(255);
  
 if(back.x<200){
  back.x = back.width/2;
  } 
    
 if(keyDown("space")&&player.y>=150){
  player.velocityY =  -12   ; 
 }
player.velocityY = player.velocityY + 0.8;

player.collide(invisibleGround);   
  
if(player.isTouching(bananaGroup)){
 bananaGroup.destroyEach();
 score = score + 2; 
}
  
if(player.isTouching(bananaGroup)){
 switch(score){
   case 10 : player.scale = 0.3;
   break;
   case 20: player.scale = 0.3;
   break;
   case 30: player.scale = 0.9;
   break;
   case 40: player.scale = 0.14;
   break;
   case 50 : player.scale = 0.5;
   break;
   default:break;
 }
}
  
if(player.isTouching(stoneGroup)){
  player.scale = 0.2;  
 }
  
banana();
stone();  

  drawSprites();
  fill("red");
  textSize(25);
  textFont("Georgia");
  text("Score:" + score ,200,30);
}

function banana(){
  if(World.frameCount%200===0){
  var banana = createSprite(300,100,20,20);
  banana.addImage(banana_image);
  banana.scale = 0.1;
  var rand = Math.round(random(100,150)); 
  banana.velocityX = -2;
  banana.lifetime = 134;
  banana.y = rand;  
  bananaGroup.add(banana);
 }
}

function stone(){
  if(World.frameCount%350===0){
   var stone = createSprite(300,350,20,20);
   stone.addImage(obstacle_image);
    stone.scale = 0.3;
    stone.collide(invisibleGround);
    stone.velocityX = -2;
    stone.lifetime = 134;
    stoneGroup.add(stone);
  }
  
}