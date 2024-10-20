let dice = [];
let numberOfDice = 5;
//let rectWindow1;



function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numberOfDice; i++) {
    //changes the size of the die new Die()
    dice[i] = new Die(60); // argument is the size of the die
  }

}

function draw() {
  background("#2F123D");


  

  // loop over the array and place+display each die
  for (let i = 0; i < dice.length; i++) {
    const die = dice[i]; // 'die' is a temporary variable for the current array item
    die.place(die.size*1.2*i+die.size, die.size*2); // place the die neatly in the row
    die.display(); // actually draw it on screen
  }










  


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

//left eye 
translate(-40,125);
strokeWeight(5);
stroke(164, 73, 7);
fill(0);
triangle(30, -60, 100, -60, 65, -120);

//right eye
translate(35, 0);
strokeWeight(5);
stroke(164, 73, 7);
fill(0);
triangle(130, -60, 200, -60, 165, -120);



//nose
translate(35, 40);
strokeWeight(5);
stroke(164, 73, 7);
fill(0);
triangle(40, -40, 90, -40, 65, -90);



//mouth 
translate(65, -5);
strokeWeight(5);
stroke(164, 73, 7);
fill(0);
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

function mouseClicked() {
  // loop over the array of dice...
  for (let i = 0; i < dice.length; i++) {
    const die = dice[i];
    // if the cursor is over the current die, freeze/unfreeze that die
    if (die.isTouched(mouseX,mouseY)) {
      die.toggleFreeze();
      
    }
  }
}

// for computers...
function keyPressed() {
  shakeDice();
}

// for phones...
function deviceShaken() {
  shakeDice();
}

// loop over the array of dice and try to roll each one in turn
// (note that a die won't actually roll if it's frozen)
// also, output the list of values to the console
function shakeDice() {
  let list = "values: ";
  for (let i = 0; i < dice.length; i++) {
    const die = dice[i];
    die.roll();
    list = list + die.value + " ";
  }
  console.log(list);
}