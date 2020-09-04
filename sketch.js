var doctor;
var man1,man2,man3,man4,man5,man6,man7,man8,man9,man10;
var man11,man12,man13,man14,man15,man16,man17,man18,man19,man20,man21;
var corona1,corona2, corona3, corona4;
 var corona5 ,corona6,corona7,corona8,corona9,corona10;

function preload(){
 
  person1=loadImage("image/person1.png");
  person2=loadImage("image/person2.png");
  doctorimg=loadImage("image/doctor.png");
  coronavirus=loadImage("image/coronavirus.png")



}


function setup() {
  createCanvas(displayWidth-10,displayHeight-10);
 

doctor= createSprite(displayWidth-200,displayHeight-120,10,10);
doctor.addImage("doctor",doctorimg);

man1=createSprite(100,100,2,2);
man1.addImage("man1",person1);



man2=createSprite(300,200,2,2);
man2.addImage("man2",person1);


man3=createSprite(400,300,2,2);
man3.addImage("man3",person1);


man4=createSprite(500,400,2,2);
man4.addImage("man4",person1);


man5=createSprite(600,500,2,2);
man5.addImage("man5",person1);


man6=createSprite(700,600,2,2);
man6.addImage("man6",person1);


man7=createSprite(800,700,2,2);
man7.addImage("man7",person1);


man8=createSprite(900,800,2,2);
man8.addImage("man8",person1);


man9=createSprite(1000,900,2,2);
man9.addImage("man9",person1);


man10=createSprite(150,150,2,2);
man10.addImage("man10",person1);


man11=createSprite(250,250,2,2);
man11.addImage("man11",person2);
man11.scale=0.1;

man12=createSprite(350,350,2,2);
man12.addImage("man12",person2);
man12.scale=0.1;

man13=createSprite(450,450,2,2);
man13.addImage("man13",person2);
man13.scale=0.1;

man14=createSprite(550,550,2,2);
man14.addImage("man14",person2);
man14.scale=0.1;

man15=createSprite(650,650,2,2);
man15.addImage("man15",person2);
man15.scale=0.1;

man16=createSprite(750,750,2,2);
man16.addImage("man16",person2);
man16.scale=0.1;

man17=createSprite(850,850,2,2);
man17.addImage("man17",person2);
man17.scale=0.1;

man18=createSprite(950,950,2,2);
man18.addImage("man18",person2);
man18.scale=0.1;

man19=createSprite(280,340,2,2);
man19.addImage("man19",person2);
man19.scale=0.1;

man20=createSprite(470,340,2,2);
man20.addImage("man20",person2);
man20.scale=0.1;

man21=createSprite(1200,320,2,2);
man21.addImage("man21",person2);
man21.scale=0.1;


man1.velocityX=random[5,10];
man1.velocityY=3;
man2.velocityX=random[5,10];;
man2.velocityY=3;
man3.velocityX=random[5,10];
man3.velocityY=3;
man4.velocityX=random[5,10];
man4.velocityY=3;
man5.velocityX=random[5,10];
man5.velocityY=3;
man6.velocityX=random[5,10];
man6.velocityY=3;
man7.velocityX=random[5,10];
man7.velocityY=3;
man8.velocityX=random[5,10];
man8.velocityY=3;
man9.velocityX=random[5,10];
man9.velocityY=3;
man10.velocityX=random[5,10];
man10.velocityY=3;
man11.velocityX=random[5,10];
man11.velocityY=3;
man12.velocityX=random[5,10];
man12.velocityY=3;
man13.velocityX=random[5,10];
man13.velocityY=3;
man14.velocityX=random[5,10];
man14.velocityY=3;
man15.velocityX=random[5,10];
man15.velocityY=3;
man16.velocityX=random[5,10];
man16.velocityY=3;
man17.velocityX=random[5,10];
man17.velocityY=3;
man18.velocityX=random[5,10];
man18.velocityY=3;
man19.velocityX=random[5,10];
man19.velocityY=3;
man20.velocityX=random[5,10];
man20.velocityY=3;
man21.velocityX=random[5,10];
man21.velocityY=3;















}

function draw() {
  
  background(0);  


doctor.velocityX=-6;
 




edges=createEdgeSprites();


man1.bounceOff(edges);
man2.bounceOff(edges);
man3.bounceOff(edges);
man4.bounceOff(edges);
man5.bounceOff(edges);
man6.bounceOff(edges);
man7.bounceOff(edges);
man8.bounceOff(edges);
man9.bounceOff(edges);
man10.bounceOff(edges);
man11.bounceOff(edges);
man12.bounceOff(edges);
man13.bounceOff(edges);
man14.bounceOff(edges);
man15.bounceOff(edges);
man16.bounceOff(edges);
man17.bounceOff(edges);
man18.bounceOff(edges);
man19.bounceOff(edges);
man20.bounceOff(edges);
man21.bounceOff(edges);




  drawSprites();
doctor.display();
man1.display();
man2.display();
man3.display();
man4.display();
man5.display();
man6.display();
man7.display();
man8.display();
man9.display();
man10.display();
man11.display();
man12.display();
man13.display();
man14.display();
man15.display();
man16.display();
man17.display();
man18.display();
man19.display();
man20.display();
man21.display();
//corona1.display();
//corona2.display();
//corona3.display();
//corona4.display();
//corona5.display();
//corona6.display();
//corona7.display();
//corona8.display();
//corona9.display();
//corona10.display();
}