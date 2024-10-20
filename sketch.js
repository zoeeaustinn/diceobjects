let dice = [];
let numberOfDice = 5;
let pumpkin;
let clickedDiceCount = 0;
let roundsPlayed =0;
const maxRounds =3;
//let y = 0;
//let speed = 3;
//let value = 0;
//let rectWindow1;



function setup() {
  createCanvas(1250, 1200);

pumpkin = new Pumpkin(550, 0);



  for (let i = 0; i < numberOfDice; i++) {
    //changes the size of the die new Die()
    dice[i] = new Die(100); // argument is the size of the die
  }

}

function draw() {
  background("#2F123D");




  textSize(30);
  fill(255);
  strokeWeight(0)
  textAlign(CENTER);
  text ("Press SPACE to change #", 300, 300);
  
  




textSize(50);
fill(255);
textAlign(CENTER);
text ("Match the die numbers", 260, 500);
text ("before the pumpkin", 240, 550);
text ("reaches the bottom.", 240, 600);
text ("Hurry!", 240, 650);







  
push();
translate(300, 300);
noStroke();



fill(255);
rect(520, 100, 120, 1600);
rect(760, 100, 120, 1600);


fill(0);
rect(400, 100, 120, 1600);
rect(640, 100, 120, 1600);
rect(880, 100, 120, 1600);

pop();

if (checkAllDiceMatch()){
pumpkin.isLit = true;
} else {
  pumpkin.isLit = false;
}


  // loop over the array and place+display each die
  for (let i = 0; i < dice.length; i++) {
    const die = dice[i]; // 'die' is a temporary variable for the current array item
    die.place(die.size*1.2*i+die.size, die.size*2); // place the die neatly in the row
    die.display(); // actually draw it on screen
  }

pumpkin.move();
pumpkin.display();


}

function mouseClicked() {
  // loop over the array of dice...
  for (let i = 0; i < dice.length; i++) {
    const die = dice[i];
    // if the cursor is over the current die, freeze/unfreeze that die
    if (die.isTouched(mouseX,mouseY)) {
      die.toggleFreeze();



      if (die.value === pumpkin.fallingNumber) {
        clickedDiceCount++;
        pumpkin.y -= 40; // Move the pumpkin up a little bit (10 pixels)

      }
    }
  }

  if (clickedDiceCount >= numberOfDice) {
    if (checkAllDiceMatch()) {
      pumpkin.isLit = true; // Light up the face
      PumpkinUp();
      resetGame();
      roundsPlayed++;

      if (roundsPlayed >= maxRounds){
        roundsPlayed = 0;

      }
    } else {
      pumpkin.isLit = false; // Otherwise, keep it off
    }
    clickedDiceCount = 0; // Reset the counter after checking
  }
}

function PumpkinUp(){
  pumpkin.y -=1000;
}

function resetGame(){
  pumpkin.fallingNumber = Math.floor(random(1,10));
  pumpkin.y = -120; //resets pumpkin position 

for (let i =0; i < dice.length; i++) {
  dice[i].roll();
  dice[i].frozen = false;
}

}







// for computers...
function keyPressed() {
  if (key === ' '){
     shakeDice();
  }
 
}

// for phones...
function deviceShaken() {
  shakeDice();
}


//checks if all the dice match the pumpkins falling number
function checkAllDiceMatch(){
  let firstDieValue = dice[0].value;
  for (let i = 1; i < dice.length; i++) {
    if (dice[i].value !== firstDieValue) {
      return false; // Not all dice are the same
    }
  }
  return firstDieValue === pumpkin.fallingNumber; // Check if all dice match the falling number
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