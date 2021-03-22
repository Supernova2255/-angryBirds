class SlingShot{
    constructor(body1, point2) {
        var options = {
            bodyA:body1, 
            pointB:point2, 
            stiffness:0.08,
            length:40
        }
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling)
        this.sling1 = loadImage("sprites/sling1.png")
        this.sling2 = loadImage("sprites/sling2.png")
        this.sling3 = loadImage("sprites/sling3.png")
    }
    display(){
        image(this.sling1,160, 60 )
        image(this.sling2, 130, 49)
        if(this.sling.bodyA !== null) {
            var point1 = this.sling.bodyA.position
            var point2 = this.sling.pointB
            push();
            stroke("#54270F")
            if(point1.x > 180){
                strokeWeight(3)
                line(point1.x +20,point1.y,point2.x +20,point2.y);
                line(point1.x +20,point1.y,point2.x - 20,point2.y + 20)
                image(this.sling3, point1.x + 25, point1.y, 10, 20) 
            }else{
                strokeWeight(5)
                line(point1.x -20,point1.y,point2.x -20,point2.y);
                line(point1.x -20,point1.y,point2.x + 20,point2.y + 20)
                image(this.sling3, point1.x - 25, point1.y - 5, 10, 20) 
            }
            pop();
            
        }
    }
    
    fly() {
        this.sling.bodyA = null
    }
} 