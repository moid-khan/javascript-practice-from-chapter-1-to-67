// 11. Write a program to create a calculator for +, -,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %) Compute & show the calculated result to user.

var firstNum = +prompt("Enter first number:");
var secondNum = +prompt("Enter second number:");

var operator = prompt("Enter an operator like (+, -, *, /, %):");

var calculation;

if (operator === "+") {
  calculation = firstNum + secondNum;
  document.write(
    "Sum of " + firstNum + " and " + secondNum + " is: " + calculation
  );
} else if (operator === "-") {
  calculation = firstNum - secondNum;
  document.write(
    "Subtraction of " + firstNum + " and " + secondNum + " is: " + calculation
  );
} else if (operator === "*") {
  calculation = firstNum * secondNum;
  document.write(
    "Multiplication of " +
      firstNum +
      " and " +
      secondNum +
      " is: " +
      calculation
  );
} else if (operator === "/") {
  calculation = firstNum / secondNum;
  document.write(
    "Division of " + firstNum + " and " + secondNum + " is: " + calculation
  );
} else if (operator === "%") {
  calculation = firstNum % secondNum;
  document.write(
    "Modulus of " + firstNum + " and " + secondNum + " is: " + calculation
  );
} else {
  document.write("Invalid Operator");
}
