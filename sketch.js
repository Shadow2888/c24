
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;
	var Options={isStatic: true}
	ground=Bodies.rectangle(400,380,800,20,Options)
	World.add(world,ground);
	
	var Options1={isStatic: true}
	b1=Bodies.rectangle(500,340,20,50,Options1)
	World.add(world,b1);

	var Options2={isStatic: true}
	b2=Bodies.rectangle(600,370,200,20,Options2)
	World.add(world,b2);

	var Options3={isStatic: true}
	b3=Bodies.rectangle(700,340,20,50,Options3)
	World.add(world,b3);
	//Create the Bodies Here.
var Options4={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2
}
p1=Bodies.circle(100,100,20,Options4)
World.add(world,p1);
	


	Engine.run(engine);
	
	
	
	}



function draw() {
  rectMode(CENTER);
  background(0);
  
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,800,20); 
  
  rectMode(CENTER); 
  rect(b1.position.x,b1.position.y,20,50); 
  
  rectMode(CENTER); 
  rect(b2.position.x,b2.position.y,200,20); 
  
  rectMode(CENTER); 
  rect(b3.position.x,b3.position.y,20,50); 

  ellipseMode(RADIUS);
  ellipse(p1.position.x, p1.position.y, 20, 20);
  drawSprites();
 
}

function keyPressed() {
if (keyCode === UP_ARROW) {
Matter.Body.applyForce(p1,p1.position,{x:55,y:-75});

       }

}

