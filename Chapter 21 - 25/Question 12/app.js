// 12. Write a program that converts the variable num to string.
//  Remove the dot to display “3536” display in your browser.

var num = 35.36;
num = num.toString();
var removeDot = num.replace(".", "");

document.write("<h1>Number: " + num + "<br>Result: " + removeDot + "</h1>");
    