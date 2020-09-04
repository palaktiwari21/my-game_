class Doctor{ 
    constructor(){
this.x=displayWidth-200;
this.y=displayHeight-120;
this.width=100;
this.height=100;

    

this.image=loadImage('image/doctor.png');
    }
display(){

image(this.image,this.x,this.y,this.width,this.height);


}

}