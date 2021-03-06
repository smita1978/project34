
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const MConstraint=Matter.MouseConstraint;
const Mouse=Matter.Mouse;
var roof,bob1,bob2,bob3,bob4,bob5;
var r1,r2,r3,r4,r5;
var mConstraint;
var cwp=535;
function preload()
{
	
}

function setup() {
	var canvas=createCanvas(displayWidth,displayHeight);


	engine = Engine.create();
  world = engine.world;
  var  canvasmouse=Mouse.create(canvas.elt);
 canvasmouse.pixelRate=pixelDensity();
  let options={
    mouse:canvasmouse
 };
  
mConstraint=MConstraint.create(engine,options);
World.add(world,mConstraint);

bob1=new Pendulum(cwp-120,600,"black");
r1=new Sling(bob1.body,{x:cwp-120,y:200});
bob2=new Pendulum(cwp-60,600,"yellow");
r2=new Sling(bob2.body,{x:cwp-60,y:200});

bob3=new Pendulum(cwp,600,"red");
r3=new Sling(bob3.body,{x:535,y:200});

bob4=new Pendulum(cwp+60,600,"cyan");
r4=new Sling(bob4.body,{x:cwp+60,y:200});

bob5=new Pendulum(cwp+121,600,"green");
r5=new Sling(bob5.body,{x:cwp+121,y:200});

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {

  background("pink");
  Engine.update(engine);
 // roof.display();
  
  r1.display();
  bob1.display();
  r2.display();
   
  bob2.display();
  r3.display();
   
  bob3.display();
  r4.display();
  bob4.display();
  r5.display();
  bob5.display();
  
  
}



function keyPressed(){
	if(keyCode === UP_ARROW){
    
   
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-600,y:-600});
  	}
}


function mouseDragged(){
  Matter.Body.setPosition(bob5.body,{x:mouseX,y:mouseY});
}