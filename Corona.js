class Corona{
    constructor(){
this.x=displayWidth-300;
this.y=displayHeight-180;
this.height=100;
this.width=100;
 

this.image=loadImage("image/coronavirus.png");


}
display(){
image(this.image,this.x,this.y,this.width,this.height);

    }

}