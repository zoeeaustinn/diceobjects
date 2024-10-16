let dice = [];
let numberOfDice = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numberOfDice; i++) {
    dice[i] = new Die(50); // argument is the size of the die
  }
}

function draw() {
  background("darkolivegreen");
  for (let i = 0; i < dice.length; i++) {
    const die = dice[i];
    die.place(die.size*1.2*i+die.size, die.size*2);
    die.display();
  }
}

function mouseClicked() {
  for (let i = 0; i < dice.length; i++) {
    const die = dice[i];
    if (die.isTouched(mouseX,mouseY)) {
      die.toggleFreeze();
    }
  }
}

function keyPressed() {
  shakeDice();
}

function deviceShaken() {
  shakeDice();
}

function shakeDice() {
  let list = "values: ";
  for (let i = 0; i < dice.length; i++) {
    const die = dice[i];
    die.roll();
    list = list + die.value + " ";
  }
  console.log(list);
}