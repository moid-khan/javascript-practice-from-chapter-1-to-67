// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

var name = "Hyderabad";
var str = "Islam";

var slicedName = name.slice(5);

var replacedName = str + slicedName;

document.write("Orignal Name: " + name + "<br>Replaced Name: " + replacedName);
