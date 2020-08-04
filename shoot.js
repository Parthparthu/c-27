class Shoot
{
    constructor(bodyA, bodyB)
    {
      var optoins={
          bodyA: bodyA,
          bodyB: bodyB,
          stiffness: 0.04,
          length: 10
      }   
        this.shoot = Constraint.create(optoins);
        World.add(world, this.shoot);
    }
    display()
    {
        var pointA = this.shoot.bodyA.position;
        var pointB = this.shoot.bodyB.position;
        strokeWeight(5);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}