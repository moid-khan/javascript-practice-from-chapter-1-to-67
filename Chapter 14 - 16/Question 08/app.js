// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students.
// Assume that total marks are 500 for each student, display the scores & percentages of students like:

var studentNames = ["Micheal", "John", "Tony"];

var scores = [320, 230, 480];

var totalMarks = 500;

var percentages = [
  (scores[0] / totalMarks) * 100,
  (scores[1] / totalMarks) * 100,
  (scores[2] / totalMarks) * 100,
];

for (var i = 0; i < scores.length; i++) {
  document.write(
    "<h1>Score of " +
      studentNames[i] +
      " is " +
      scores[i] +
      ". Percentage: " +
      percentages[i] +
      "%</h1>"
  );
}
