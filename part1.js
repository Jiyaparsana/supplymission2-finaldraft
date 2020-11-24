class Part1{
    constructor(x,y,width,height){

this.body = Bodies.rectangle(x,y,width,height);
this.width = width;
this.height = height;
World.add(world, this.body);

    }
    display(){
rectMode(CENTER)
var pos = this.body.position
push()
fill("red")
rect(pos.x,pos.y,this.width,this.height)
pop()

    }
}