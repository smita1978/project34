class Sling{
    constructor(a,b)
    {

        //this.offsetY=oy;
        //this.offsetX=ox;
        var options={
            bodyA:a,
            
            pointB:b,
            stiffness:1,
            angularStiffness:2,
            length:220
 
        };
        this.pointB=b;
        this.pointX=a.x;
        this.pointY=a.y-250;
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
    }

    display(){
        if(this.sling.bodyA){
        var pa=this.sling.bodyA.position;
        var pb=this.sling.pointB;
        push ();
        strokeWeight(3.5);
        line (pb.x,pb.y,pa.x,pa.y);
        pop ();
    }

    }

}