// 2. Write a program to take “gender” as input from user.
// If the user is male, give the message: Good Morning Sir.
// If the user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter your Gender (Male/Female):");

if (gender === "male" || gender === "Male" || gender === "MALE") {
  document.write("<h1>Good Morning Sir</h1>");
} else if (gender === "female" || gender === "Female" || gender === "FEMALE") {
  document.write("<h1>Good Morning Ma'am</h1>");
} else {
  document.write("Error! wrong input");
}
