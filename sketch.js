const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
	
var paperObject

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paperObject = new Paper(100, 100, 40);
	box1 = new Box(650,640,200,200);
   ground = new Ground(400, 670, 800, 20);
   Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  paperObject.display();
  box1.display(); 
  ground.display(); 

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
   
      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:55,y:-80});
   
	}
}
   


