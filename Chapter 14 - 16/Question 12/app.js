// 12.  Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)

var arr = ["This", "is", "my", "cat"];

document.write("<h1>Array:<br>" + arr + "</h1>");

var str = arr.join(" ");

document.write("<h1>String:<br>" + str + "</h1>");
