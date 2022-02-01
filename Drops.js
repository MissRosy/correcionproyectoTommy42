class Drops {
    constructor(x, y,r) {

        var options ={
            restitution:1,
            friction: 0.1
        }
        this.r=3;
        this.rain = Bodies.circle(x,y,this.r,options);
     
       // this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.rain);

    }
    
    display() {
          //Esta parte va en donde se generan las drops, en el sketch línea 39 
        /*var maxDrops = 100;
        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,400), random(0,400)));
        }*/

        var pos = this.rain.position;
       var angle = this.rain.angle;

        push();
       translate(pos.x, pos.y);
       rotate(angle);
        imageMode(CENTER);
        noStroke();
       fill("blue")
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }
    update(){
        if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }
    

};