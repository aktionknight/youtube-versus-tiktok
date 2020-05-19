class Log{
  constructor(x, y, width, height, angle) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':0.6
      }
      this.body = Bodies.rectangle(x, y,width,20, options);
      this.width = width;
      this.height = 20;
      
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      fill ("white")
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER)
      rect(0,0,this.width,this.height)
      pop();
    }
}