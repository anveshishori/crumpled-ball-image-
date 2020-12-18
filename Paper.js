class Paper{
constructor(x,y,radius){
    var option = {
    restitution : 0.3,
    isStatic: false,
    friction:1,
    density: 1.5


}
this.body = Bodies.circle(x,y,radius/3, option)
this.radius = radius;
this.image = loadImage("paper.png")

World.add(myworld, this.body);

}

display(){
var pos = this.body.position

push();
translate(pos.x,pos.y);
fill("white")
imageMode(CENTER)
image(this.image,0,0,this.radius, this.radius)
pop();
}



}