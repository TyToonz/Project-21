var wall, thickness;
var bullet, speed, weight;


function setup() {
  createCanvas(1600,400);
  speed = random (223,321);
  weight = random (30, 52);
  thickness = random (22,83);

  bullet = createSprite(50, 200, 50, 20);
  bullet.shapeColor = ("white")

  wall = createSprite(1500, 200, thickness, height/2);
  wall.shapeColor = (80,80,80);
}

function draw() {
  background("black");

  bullet.velocityX = speed;

  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed *speed/(thickness *thickness *thickness);
    
    if (damage > 10){
      wall.shapeColor = color ("red");
    }

    if(damage < 10){
      wall.shapeColor = color ("lime");
    }
  }

  drawSprites();
}

function hasCollided(bullet, wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}