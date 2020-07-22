// 8. Store total marks & marks obtained by a student in 2 variables.
// Compute the percentage & show the result in your browser

var totalMarks = 980;
var obtainedMarks = 804;

var percentage = (obtainedMarks / totalMarks) * 100;

document.write("<h1>Marks Sheet</h1>");

document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + obtainedMarks + "<br>");

document.write("Percentage: " + percentage + "%");
