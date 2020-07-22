// 4. Write a function that receives marks received by a student in 3 subjects and returns
// the average and percentage of these marks.
// there should be 3 functions one is the mainFunction and other are for average and percentage.
// Call those functions from mainFunction and display result in mainFunction.

function average(marksOne, marksTwo, marksThree) {
  var average = (marksOne + marksTwo + marksThree) / 3;

  return average;
}

function percentage(totalMarks, obtainedMarks) {
  var totalMarks = 300;
  var percentage = (obtainedMarks / totalMarks) * 100;

  return percentage;
}

function result(marksOne, marksTwo, marksThree) {
  var totalMarks = 300;
  var obtainedMarks = marksOne + marksTwo + marksThree;
  var avg = average(marksOne, marksTwo, marksThree).toFixed(2);
  var per = percentage(totalMarks, obtainedMarks).toFixed(2);

  document.write("<h1>Average " + avg + " Percentage " + per + "%</h1>");
}

result(86, 73, 59);
