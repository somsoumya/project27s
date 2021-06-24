const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
var roof,bob1,bob2,bob3,bob4,bob5,rope1,rope2,rope3,rope4,rope5;
var backgroundImg;
var ironImg,iron;

function preload(){
backgroundImg=loadImage("bk.jpg");
ironImg=loadImage("roofRod.png");
}



function setup() {
	createCanvas(800, 700);


 	 engine = Engine.create();
 	 world = engine.world;


	  iron=createSprite(350,100,30,30);
	  iron.addImage(ironImg);
	  iron.scale=0.5;
	 
 
	  roof = new Roof (350,100,300,30);


     bob1 = new Bob(250,300);
	 bob2 = new Bob(300,300);
     bob3 = new Bob(350,300);
	 bob4 = new Bob(400,300);
	 bob5 = new Bob(450,300);
	 
     rope1 = new Rope(bob1.body,roof.body,-100,0);
 	 World.add(world,rope1);

	 rope2 = new Rope(bob2.body,roof.body,-50,0);
 	 World.add(world,rope2);

	 rope3 = new Rope(bob3.body,roof.body,0,0);
 	 World.add(world,rope3);

	 rope4 = new Rope(bob4.body,roof.body,+50,0);
 	 World.add(world,rope4);

	 rope5 = new Rope(bob5.body,roof.body,+100,0);
 	 World.add(world,rope5);





	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  
  background(backgroundImg);
  Engine.update(engine);

 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();

 roof.display();

drawSprites();
}


function keyPressed(){
if(keyCode===32){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-370,y:0});
}

}



