class Monster {
    constructor(x,y,width,height)  
    
    {
      var options = {
          isStatic:true,
          frictionAir:0.001,
          density:5
          
      }
     this.image = loadImage("img/Monster-01.png")
     
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push ();
      translate (pos.x, pos.y)
      rotate (this.body.angle)
       fill("red");
      image(this.image,0,0, 200,200);
      pop ();
    }
  };