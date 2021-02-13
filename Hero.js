class Hero {
    constructor(x,y,width,height)  
    
    {
      var options = {
        
          frictionAir:0.005,
          density:1
          
      }
     this.image = loadImage("img/Superhero-01.png")
     
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