
  
  class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':3,
        'density':5
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
    this.image=loadImage("dustbingreen.png")

  }
  display(){

  
    var pos =this.body.position;
    push();
    rotate(this.body.angle);
    translate(pos.x, pos.y)
    imageMode(CENTER);
    fill(255);
    image(this.image,0,0, this.width, this.height);
    pop();
  }
}
