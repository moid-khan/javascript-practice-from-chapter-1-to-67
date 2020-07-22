// 2. Repeat task1 for subtraction, multiplication, division & modulus.

var valOne = +prompt("Enter first value: ");
var valTwo = +prompt("Enter second value: ");

var sub = valOne - valTwo;
var mul = valOne * valTwo;
var div = valOne / valTwo;
var mod = valOne % valTwo;

document.write(
  "<h1>Subtraction of " + valOne + " and " + valTwo + " is " + sub + "</h1><br>"
);

document.write(
  "<h1>Multiplication of " +
    valOne +
    " and " +
    valTwo +
    " is " +
    mul +
    "</h1><br>"
);

document.write(
  "<h1>Division of " + valOne + " and " + valTwo + " is " + div + "</h1><br>"
);

document.write(
  "<h1>Modulus of " + valOne + " and " + valTwo + " is " + mod + "</h1><br>"
);
