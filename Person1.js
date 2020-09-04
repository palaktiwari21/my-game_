class Person1{
    constructor(){
        this.x=displayWidth-200;
this.y=displayHeight-100;
this.height=100;
this.width=100;
 

this.image=loadImage("image/person2.png");


}
display(){
image(this.image,0,0,this.width,this.height);

    }

}