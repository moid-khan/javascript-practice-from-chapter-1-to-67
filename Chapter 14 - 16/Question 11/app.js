// 11. Write a program to initialize an array with city names.Copy 3 array elements from cities array to selectedCities array.

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

document.write("<h1>Cities List:</h1>");
document.write("<h1>" + cities + "</h1>");

var selectCities = cities.slice(2, 4);

document.write("<h1>Selected Cities List:</h1>");
document.write("<h1>" + selectCities + "</h1>");
