var sum = "#";

var t = 28;

for (var i = 0; i < 27; i++) {
  sum = sum + "#";
}

sum = sum + "\n";

for (i = 0; i < t; i++) {
  if (i > 5 && i < 22) {
    sum = sum + " ";
  } else {
    sum = sum + "#";
  }
}

sum = sum + "\n";

for (i = 0; i < t; i++) {
  if (i > 1 && i <= 5) {
    sum = sum + " ";
  } else if (i > 5 && i < 9) {
    sum = sum + "*";
  } else if (i >= 9 && i < 24) {
    sum = sum + " ";
  } else if (i >= 24 && i < 26) {
    sum = sum + "*";
  } else {
    sum = sum + "#";
  }
}

sum = sum + "\n";

for (i = 0; i < t; i++) {
  if (i >= 1 && i <= 4) {
    sum = sum + " ";
  } else if (i == 5) {
    sum = sum + "*";
  } else if (i > 5 && i < 8) {
    sum = sum + "#";
  } else if (i >= 8 && i < 10) {
    sum = sum + "*";
  } else if (i >= 8 && i < 18) {
    sum = sum + " ";
  } else if (i >= 18 && i < 20) {
    sum = sum + "*";
  } else if (i >= 20 && i < 22) {
    sum = sum + " ";
  } else if (i == 22) {
    sum = sum + "O";
  } else if (i >= 23 && i < 25) {
    sum = sum + " ";
  } else if (i == 25) {
    sum = sum + "*";
  } else {
    sum = sum + "#";
  }
}

sum = sum + "\n";

for (i = 0; i < t; i++) {
  if (i >= 1 && i <= 5) {
    sum = sum + " ";
  } else if (i > 5 && i < 9) {
    sum = sum + "*";
  } else if (i >= 9 && i < 14) {
    sum = sum + " ";
  } else if (i == 14) {
    sum = sum + "O";
  } else if (i >= 15 && i < 18) {
    sum = sum + " ";
  } else if (i >= 18 && i < 20) {
    sum = sum + "#";
  } else if (i >= 20 && i < 22) {
    sum = sum + "*";
  } else if (i >= 22 && i < 26) {
    sum = sum + " ";
  } else if (i == 26) {
    sum = sum + "*";
  } else {
    sum = sum + "#";
  }
}

sum = sum + "\n";

for (i = 0; i < t; i++) {
  if (i >= 1 && i <= 8) {
    sum = sum + " ";
  } else if (i == 9) {
    sum = sum + "O";
  } else if (i >= 10 && i < 18) {
    sum = sum + " ";
  } else if (i >= 18 && i < 20) {
    sum = sum + "#";
  } else if (i >= 20 && i < 23) {
    sum = sum + "*";
  } else if (i >= 23 && i < 27) {
    sum = sum + " ";
  } else {
    sum = sum + "#";
  }
}

sum = sum + "\n";

for (i = 0; i < t; i++) {
  if (i >= 1 && i <= 17) {
    sum = sum + " ";
  } else if (i >= 18 && i < 20) {
    sum = sum + "#";
  } else if (i >= 20 && i < 22) {
    sum = sum + "*";
  } else if (i >= 22 && i < 27) {
    sum = sum + " ";
  } else {
    sum = sum + "#";
  }
}

sum = sum + "\n";

for (i = 0; i < t; i++) {
  if (i == 0) {
    sum = sum + "#";
  } else if (i == 4) {
    sum = sum + "O";
  } else if (i == 13) {
    sum = sum + "#";
  } else if (i == 14) {
    sum = sum + "*";
  } else if (i == 27) {
    sum = sum + "#";
  } else {
    sum = sum + " ";
  }
}

sum = sum + "\n";

for (i = 0; i < t; i++) {
  if (i == 0) {
    sum = sum + "#";
  } else if (i == 1) {
    sum = sum + "*";
  } else if (i == 13) {
    sum = sum + "#";
  } else if (i >= 14 && i <= 15) {
    sum = sum + "*";
  } else if (i == 22) {
    sum = sum + "O";
  } else if (i == 27) {
    sum = sum + "#";
  } else {
    sum = sum + " ";
  }
}

sum = sum + "\n";

for (i = 0; i < t; i++) {
  if (i == 0) {
    sum = sum + "#";
  } else if (i >= 1 && i < 4) {
    sum = sum + "*";
  } else if (i >= 13 && i <= 14) {
    sum = sum + "#";
  } else if (i >= 15 && i <= 16) {
    sum = sum + "*";
  } else if (i == 20) {
    sum = sum + "O";
  } else if (i >= 25 && i <= 26) {
    sum = sum + "*";
  } else if (i == 27) {
    sum = sum + "#";
  } else {
    sum = sum + " ";
  }
}

sum = sum + "\n";

for (i = 0; i < t; i++) {
  if (i >= 0 && i <= 1) {
    sum = sum + "#";
  } else if (i > 1 && i < 6) {
    sum = sum + "*";
  } else if (i >= 12 && i <= 14) {
    sum = sum + "#";
  } else if (i >= 15 && i <= 17) {
    sum = sum + "*";
  } else if (i == 24) {
    sum = sum + "*";
  } else if (i > 24 && i <= 27) {
    sum = sum + "#";
  } else {
    sum = sum + " ";
  }
}

sum = sum + "\n";

for (var i = 0; i < t; i++) {
  sum = sum + "#";
}

console.log(sum);