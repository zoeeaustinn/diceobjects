let dice = [];
let numberOfDice = 5;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < numberOfDice; i++) {
    dice[i] = new Die(6);
  }
}

function draw() {
  background(125);
  for (let i = 0; i < dice.length; i++) {
    const die = dice[i];
    die.place(60*i+30,50);
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
  let list = "values: ";
  for (let i = 0; i < dice.length; i++) {
    const die = dice[i];
    die.roll();
    list = list + die.value + " ";
  }
  console.log(list);
}