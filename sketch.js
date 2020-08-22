
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	var canvas = createCanvas(400,400);

	
	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	ball = new Ball(30,40,20,20);


	
  
}


function draw() {
  background(255);
  Engine.update(engine);

  ball.display();
  
 
}



