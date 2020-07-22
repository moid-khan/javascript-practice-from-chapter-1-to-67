// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a.Store a Celsius temperature into a variable.
// b.Convert it to Fahrenheit & output “NNoC is NNoF”.
// c.Now store a Fahrenheit temperature into a variable.
// d.Convert it to Celsius & output “NNoF is NNoC”.

var tempInCelsius = 25;
var tempInFahrenheit = 70;

var celsiusToFahrenheit = (tempInCelsius * 9) / 5 + 32;
var fahrenheitToCelsius = ((tempInFahrenheit - 32) * 5) / 9;

document.write(
  "<h1>" +
    tempInCelsius +
    "<sup>o</sup>C is " +
    celsiusToFahrenheit +
    "<sup>o</sup>F<br></h1>"
);

document.write(
  "<h1>" +
    tempInFahrenheit +
    "<sup>o</sup>F is " +
    fahrenheitToCelsius +
    "<sup>o</sup>C</h1>"
);
