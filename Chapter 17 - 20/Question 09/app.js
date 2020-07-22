// 9. Write a program to identify the smallest number in the given array.A = [24, 53, 78, 91, 12]

var A = [24, 53, 78, 91, 12];
var smallest = A[0];

for (var i = 0; i < A.length; i++) {
  if (smallest > A[i]) {
    smallest = A[i];
  }
}

document.write("Array items: " + A + "<br>");
document.write("The smallest number: " + smallest);
