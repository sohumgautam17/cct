var car, wall;



var speed, weight;



var deformation;

function setup() {
 
  createCanvas(1510,800);
  speed=random(55,90);
  weight=random(400,1500);

  

  car = createSprite(50, 300, 50, 50);
  car.velocityX = speed;
  wall = createSprite(1200, 300, 25, 120);

  

}
console.log(speed);
function draw() {
  background("black");  
  if(car.x>1180)
   {
   car.velocityX = 0;
   deformation = 0.5*weight*speed* speed/22509;
   if(deformation<100){
     car.shapeColor = color(0, 255,0);
   }
   if(deformation<180 && deformation> 100)
   {
    car.shapeColor=color(230, 230, 0);
   }
   if(deformation>180)
   {
     car.shapeColor=color(250, 0, 0);
   }
  
  
  drawSprites();
 }
}
