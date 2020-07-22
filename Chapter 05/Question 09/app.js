// 9. Assume we have 10 US dollars & 25 Saudi Riyals.Write a script to
// convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

var usDollars = 10;
var saudiRiyal = 25;

var dollarToPkr = 104.8;
var riyalToPkr = 28;

var exchangedAmmount = usDollars * dollarToPkr + saudiRiyal * riyalToPkr;

document.write("<h1>Currency in PKR</h1>");

document.write("Total Currency in PKR: " + exchangedAmmount);
