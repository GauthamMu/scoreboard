// digit construction
class Digit {
  constructor(u, ul, ur, c, bl, br, b) {
    this.u = u;
    this.ul = ul;
    this.ur = ur;
    this.c = c;
    this.bl = bl;
    this.br = br;
    this.b = b;
  }

  returnArray() {
    return [this.u, this.ul, this.ur, this.c, this.bl, this.br, this.b];
  }
}

let digit0,
  digit1,
  digit2,
  digit3,
  digit4,
  digit5,
  digit6,
  digit7,
  digit8,
  digit9,
  digitArray,
  leftTensDigit,
  leftOnesDigit,
  rightTensDigit,
  rightOnesDigit,
  leftScore,
  rightScore;

document.addEventListener("DOMContentLoaded", function () {
  // digits
  digit0 = new Digit(true, true, true, false, true, true, true);
  digit1 = new Digit(false, false, true, false, false, true, false);
  digit2 = new Digit(true, false, true, true, true, false, true);
  digit3 = new Digit(true, false, true, true, false, true, true);
  digit4 = new Digit(false, true, true, true, false, true, false);
  digit5 = new Digit(true, true, false, true, false, true, true);
  digit6 = new Digit(true, true, false, true, true, true, true);
  digit7 = new Digit(true, false, true, false, false, true, false);
  digit8 = new Digit(true, true, true, true, true, true, true);
  digit9 = new Digit(true, true, true, true, false, true, true);

  digitArray = [
    digit0,
    digit1,
    digit2,
    digit3,
    digit4,
    digit5,
    digit6,
    digit7,
    digit8,
    digit9,
  ];

  leftTensDigit = document.getElementById("leftTens");
  leftOnesDigit = document.getElementById("leftOnes");
  rightTensDigit = document.getElementById("rightTens");
  rightOnesDigit = document.getElementById("rightOnes");

  leftScore = 0;
  rightScore = 0;
});

function displayNumber(JSdigit, HTMLdigit) {
  segments = HTMLdigit.children;
  for (let i = 0; i < segments.length; i++) {
    if (JSdigit.returnArray()[i] == true) {
      segments[i].style.display = "block";
    } else {
      segments[i].style.display = "none";
    }
  }
}

function incrementLeft() {
  leftScore++;
  leftScoreTens = Math.floor(leftScore / 10);
  leftScoreOnes = leftScore % 10;
  displayNumber(digitArray[leftScoreTens], leftTensDigit);
  displayNumber(digitArray[leftScoreOnes], leftOnesDigit);
}

function incrementRight() {
  rightScore++;
  rightScoreTens = Math.floor(rightScore / 10);
  rightScoreOnes = rightScore % 10;
  displayNumber(digitArray[rightScoreTens], rightTensDigit);
  displayNumber(digitArray[rightScoreOnes], rightOnesDigit);
}

function resetScoreboard() {
	leftScore = 0;
	rightScore = 0;
  displayNumber(digit0, leftTensDigit);
  displayNumber(digit0, leftOnesDigit);
  displayNumber(digit0, rightTensDigit);
  displayNumber(digit0, rightOnesDigit);
}
