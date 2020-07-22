// 6. Write a function that computes factorial of a number.

function factorialize(num) {
  if (num < 0) {
    return -1;
  } else if (num == 0) {
    return 1;
  } else {
    return num * factorialize(num - 1);
  }
}
alert(factorialize(5));
