// 4. Calculator: Write a function that takes three arguments num1, num2 & operator &
// compute the desired operation.Return and show the desired result in your browser.

function calculator(numOne, numTwo, operator) {
  switch (operator) {
    case "+":
      return numOne + numTwo;
      break;
    case "-":
      return numOne - numTwo;
      break;
    case "/":
      return numOne / numTwo;
      break;
    case "*":
      return numOne * numTwo;
      break;
    default:
      return "Error! Something went wrong";
  }
}

alert(calculator(4, 2, "+"));
