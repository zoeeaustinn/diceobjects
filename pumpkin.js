class Pumpkin{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 100;
        this.speed = 1;
        this.fallingNumber = Math.floor(random(1, 10));
        this.isLit = false;
    }

move(){

    this.y += this.speed;

    if(this.y > height + this.height) {
        this.y = -this.height;
    }
}




display(){
    push();
    translate(this.x, this.y);



  // falling number  
textSize(50);
fill(255);
textAlign(CENTER, CENTER);
text(this.fallingNumber, 400, 600);



    
//Draws pumpkin

push();
translate(300, 300);


strokeWeight(10);
stroke(164, 73, 7);
fill("#eb690b");

//pumpkin
ellipse(135, 60, 150, 300);
ellipse(50, 60, 150, 300);
ellipse(-10, 70, 200, 300);
ellipse(5, 80, 150, 300);
ellipse(50, 80, 150, 300);
ellipse(200, 70, 200, 300);
ellipse(175, 80, 150, 300);
ellipse(135, 80, 150, 300);
ellipse(95, 80, 100, 300);


//trunk
strokeWeight(10);
stroke(84, 55, 10);
fill("#784f0f");
rect(95, -100, 30, 70);

this.drawFace();

pop();
}

drawFace(){


let faceColor = this.isLit ? "#ffff00" : 0;




push();
//left eye 
translate(-40,125);
strokeWeight(5);
stroke(164, 73, 7);
fill(faceColor);
triangle(30, -60, 100, -60, 65, -120);


//right eye
translate(35, 0);
strokeWeight(5);
stroke(164, 73, 7);
fill(faceColor);
triangle(130, -60, 200, -60, 165, -120);



//nose
translate(35, 40);
strokeWeight(5);
stroke(164, 73, 7);
fill(faceColor);
triangle(40, -40, 90, -40, 65, -90);



//mouth 
translate(65, -5);
strokeWeight(5);
stroke(164, 73, 7);
fill(faceColor);
arc(0, 0, 200, 100, 0, PI, CHORD);

//right tooth
translate(20, 10);
strokeWeight(5);
stroke(164, 73, 7);
fill("#eb690b");
square(0, 0, 20);

//left tooth
translate(-60, 20);
strokeWeight(5);
stroke(164, 73, 7);
fill("#eb690b");
square(0, 0, 25);


pop();

}
















}