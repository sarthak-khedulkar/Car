var car,wall
var speed,weight
function setup() {
  createCanvas(800,400);
 wall= createSprite(50, 200, 50, 50);
 car= createSprite(1200, 200, 60, 100);

 speed=random (55,90)
 weight=random(1400,400)
 car.velocityX=speed;
}

function draw() {
  background("black");
  if(wall.x-car.x<(car.width+wall.width)/2){
car.velocityX=0;
var deformation=0.5; speed/22509;
if (deformation>180){
  car.shapColor="red";
}
if (deformation<180 && deformation>100){
  car.shapColor="yellow";
}
if (deformation<100){
  car.shapColor="green";
}
  }
  drawSprites();
}