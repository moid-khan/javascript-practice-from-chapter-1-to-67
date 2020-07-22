// 6. Write a program to take input the marks obtained in three subjects & total marks.Compute &
// show the resulting percentage on your page.
// Take percentage & compute grade as per following table:

var obtainedMarks = +prompt("Enter the marks obtained in three subjects:");
var totalMarks = +prompt("Enter total marks:");

var percentage = (obtainedMarks / totalMarks) * 100;

var grade;
var remarks;

if (percentage >= 80) {
  grade = "A-one";
  remarks = "Excellent";
} else if (percentage >= 70) {
  grade = "A";
  remarks = "You need to  improve";
} else if (percentage >= 60) {
  grade = "fail";
  remarks = "sorry";
}

document.write("<h1>Marks Sheet</h1>");

document.write("<h2>Total Marks " + totalMarks + "</h2>");
document.write("<h2>Marks obtained " + obtainedMarks + "</h2>");
document.write("<h2>Percentage " + percentage + "</h2>");
