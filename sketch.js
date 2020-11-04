var wall, bullet, speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  

   bullet = createSprite(0,200,20,10);
   bullet.velocityX=speed;
   bullet.shapeColor="white";
  
  wall = createSprite(1500,200,thickness,200);
  wall.shapeColor= color(80,80,80);
}

function draw() {
  background("black");
  
  if(hasCollided(bullet, wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);


    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }



  drawSprites();
}

