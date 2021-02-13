class Block {
  constructor(x,y,width,height) {
    var options = {
        restitution:0.8,
        friction:1.2,
        density:20
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    strokeWeight (3)
    push ();
    translate (pos.x, pos.y)
    rotate (this.body.angle)
    rectMode(CENTER);
    fill("blue");
    rect(0,0, this.width, this.height);
    pop ();
  }
};