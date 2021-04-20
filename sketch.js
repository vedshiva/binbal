
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	strok_1 = Bodies.rectangle(width/1.2, 360, 200, 20 , {isStatic:true} );
	World.add(world, strok_1);

	strok_2 = Bodies.rectangle(width/1.2-100, 320, 20, 100 , {isStatic:true} );
	World.add(world, strok_2);
	
	strok_3 = Bodies.rectangle(width/1.2+100, 320, 20, 100 , {isStatic:true} );
	World.add(world, strok_3);

	ground = Bodies.rectangle(width/2, 380, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	ball = new Ball (100,360,20);

	Engine.run(engine);
  

}

function draw() {
  rectMode(CENTER);
  background(255);

  fill (255);

  rect (strok_1.position.x,strok_1.position.y,200,20)

  rect (strok_2.position.x,strok_2.position.y,20,100)

  rect (strok_3.position.x,strok_3.position.y,20,100)

  fill (255,255,0)

  rect (ground.position.x,ground.position.y,width,10)

  ball.display();

  drawSprites();

}

	function keyPressed() {
		if (keyCode === UP_ARROW) {
  
		  Matter.Body.applyForce(ball.body,ball.body.position,{x:130,y:-50});
	  
		}
  }


