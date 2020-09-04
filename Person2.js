class Person2{
    constructor(){
this.x=displayWidth-400;
this.y=displayHeight-120;
this.height=100;
this.width=100;
 

this.image=loadImage("image/person1.png");


}
display(){
image(this.image,this.x,this.y,this.width,this.height);

    }

}