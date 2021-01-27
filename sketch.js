
var bullets , wall;
var speed,weight;

function setup() {
  createCanvas(800,800);
   bullets = createSprite(100,310,30,30);
   
   wall= createSprite(700,300,20,100);
   
speed = random(55,90);
weight = random(400,1500);
thickness = random(400,500); 
bullets.velocityX=speed;

}

function draw() {
  background(0,0,255);  
  
if(hasCollided(bullets,wall)){
bullets.velocityX=0;
var damage=0.5 *weight * speed *speed/(thickness*thickness*thickness);

if(damage>10){

wall.shapeColor="red";
}
if(damage<10){

  wall.shapeColor=color(0,255,0);
  }
}



hasCollided();
drawSprites();
}

function hasCollided(){

bulletsRightEdge= bullets.x+bullets.width;
wallLeftEdge=  wall.x;
if(bulletsRightEdge>=wallLeftEdge){
 return true

}
return false;
}
