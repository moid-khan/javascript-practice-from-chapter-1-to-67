// 14. Write a program to generate your K - Electric bill in your browser.All the amounts should be
// rounded off to 2 decimal places.Display the following fields:
// a.Customer Name
// b.Current Month
// c.Number of units
// d.Charges per unit
// e.Net Amount Payable(within Due Date)
// f.Late Payment Surcharge g.Gross Amount Payable(after Due Date) Where,
//   Net Amount Payable(within Due Date) = Number of units * Charges per unit
//   & Gross Amount Payable(after Due Date) = Net Amount + Late Payment Surcharge

var date = new Date();
var months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octuber",
  "November",
  "December",
];

var customerName = "ABC Customer";
var currentMonth = months[date.getMonth()];

var noOfUnits = 410;
var chargesPerUnit = 16;
var latePaymentSurcharge = 350;

var netAmountPayable = noOfUnits * chargesPerUnit; //Within Due Date
var grossAmountPayable = netAmountPayable + latePaymentSurcharge; //After Due Date

document.write("<h1>K-Electric Bill</h1>");
document.write("<p>Customer Name: " + customerName + "</p>");
document.write("<p>Month: " + currentMonth + "</p>");
document.write("<p>No of units: " + noOfUnits + "</p>");
document.write("<p>Charges per units: " + chargesPerUnit + "</p><br>");
document.write(
  "<p>Net amount payable (within Due Date): " + netAmountPayable + "</p>"
);
document.write("<p>Late payment surcharge: " + latePaymentSurcharge + "</p>");
document.write(
  "<p>Gross amount payable (after Due Date): " + grossAmountPayable + "</p>"
);
