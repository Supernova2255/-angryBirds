class SlingShot{
    constructor(body1, point2) {
        var options = {
            bodyA:body1, 
            pointB:point2, 
            stiffness:1.0,
            length:10
        }
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling)
    }
    display(){
        if(this.sling.bodyA !== null) {
            var point1 = this.sling.bodyA.position
            var point2 = this.sling.pointB
            line(point1.x,point1.y,point2.x,point2.y);
        }
    }
    
    fly() {
        this.sling.bodyA = null
    }
} 