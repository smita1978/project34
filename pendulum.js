class Pendulum{
    constructor(x,y,r){
        var options={

            'restitution':1,
            friction:0.3,
            'frictionAir':0.0,
            stop:1,
            density:2,
            'inertia':Infinity
            
        };
        this.body=Bodies.rectangle(x,y,40,40,options);
        this.x=x;
        this.y=y;
        this.color=r;
        //this.image=loadImage("paper.png");
        World.add(world,this.body);
   
         }
         display(){
            var pos = this.body.position;
           var angle=this.body.angle;
           // ellipseMode(CENTER);
            push();
            translate (pos.x,pos.y);
            rotate (angle);
            noStroke();
            fill (this.color); 
            ellipse(0,0,60,60);
            pop ();
         }
}