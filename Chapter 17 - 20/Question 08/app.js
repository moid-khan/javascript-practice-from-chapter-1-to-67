// 8. Write a program to identify the largest number in the given array.A = [24, 53, 78, 91, 12].

var A = [24, 53, 78, 91, 12];
var largest = A[0];

for (var i = 0; i < A.length; i++) {
  if (largest < A[i]) {
    largest = A[i];
  }
}

document.write("Array items: " + A + "<br>");
document.write("The largest number: " + largest);
