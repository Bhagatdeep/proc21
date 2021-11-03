
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var left_wall;
var right_wall;

function preload()
{
	
}

function setup() {
createCanvas(1600, 700);


engine = Engine.create();
world = engine.world;

//Create the Bodies Here.
var ball_options={
  isStatic:false,
  restitution: 0.3,
  friction:0,
  density:1.2
}

var ground_option={
  isStatic:true
}
ground = Bodies.rectangle(width/2,670,1600,40,ground_option);
World.add(world,ground);

ball = Bodies.circle(100,10,20,ball_options);
World.add(world, ball);

left_wall = Bodies.rectangle(800,620,5,200,ground_option)
World.add(world,left_wall)
fill("yellow")

right_wall = Bodies.rectangle(1200,620,5,200,ground_option)
World.add(world,right_wall)
fill("yellow")

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  
  rect(ground.position.x,ground.position.y,600,2) 
  
  ellipse(ball.position.x,ball.position.y,20)

  rect(left_wall.position.x,left_wall.position.y,5,200)

  rect(right_wall.position.x,left_wall.position.y,5,200)

  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball,{x:ball.position.x,y:ball.position.y},{x:100,y:30})
  } 
}
  
