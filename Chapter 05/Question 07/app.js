// 7.  Write a program to implement checkout process of a shopping cart system for an
// e - commerce website.Store the following in variables
// a.Price of item 1
// b.Price of item 2
// c.Ordered quantity of item 1
// d.Ordered Quantity of item 2
// e.Shipping charges
// Compute the total cost & show the receipt in your browser.

var itemOnePrice = 650;
var itemTwoPrice = 100;

var itemOneQuantity = 3;
var itemTwoQuantity = 7;

var shippingCharges = 100;

var totalCost =
  itemOnePrice * itemOneQuantity +
  itemTwoPrice * itemTwoQuantity +
  shippingCharges;

document.write("<h1>Shopping Cart</h1>");
document.write("Price of item 1 is " + itemOnePrice + "<br>");
document.write("Quantity of item 1 is " + itemOneQuantity + "<br>");
document.write("Price of item 2 is " + itemTwoPrice + "<br>");
document.write("Quantity of item 2 is " + itemTwoQuantity + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br><br>");
document.write("Total cost of your order is " + totalCost);
