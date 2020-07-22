// 8. Write a nested function that computes hypotenuse of a right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

function calculateHypotenuse(base, perpendicular) {
  var hypotenuse = calculateSquare(base) + calculateSquare(perpendicular);
  function calculateSquare(num) {
    return num ** num;
  }
  return hypotenuse;
}

alert(calculateHypotenuse(2, 3));
