// digit construction
function Digit(u, ul, ur, c, bl, br, b) {
  this.u = u;
  this.ul = ul;
  this.ur = ur;
  this.c = c;
  this.bl = bl;
  this.br = br;
  this.b = b;
}

// digits
digit0 = Digit(1, 1, 1, 0, 1, 1, 1);
digit1 = Digit(0, 0, 1, 0, 0, 1, 0);
digit2 = Digit(1, 0, 1, 1, 1, 0, 1);
digit3 = Digit(1, 0, 1, 1, 0, 1, 1);
digit4 = Digit(0, 1, 1, 1, 0, 1, 0);
digit5 = Digit(1, 1, 0, 1, 0, 1, 1);
digit6 = Digit(1, 1, 0, 1, 1, 1, 1);
digit7 = Digit(1, 0, 1, 0, 0, 1, 0);
digit8 = Digit(1, 1, 1, 1, 1, 1, 1);

function displayNumber(Digit, segmentArray) {}

function incrementLeft() {}

function incrementRight() {}
