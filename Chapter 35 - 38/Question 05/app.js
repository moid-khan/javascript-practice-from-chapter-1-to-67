// 5. Write a function that squares its argument.

function getSquare(num) {
  var square = num ** num;
  return square;
}

alert(getSquare(+prompt("Enter a number to square")));
