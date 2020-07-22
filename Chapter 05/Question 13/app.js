// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply”
//  of your favorite snack is ? Wonder no more.
//  a.Store your favorite snack into a variable
//  b.Store your current age into a variable.
//  c.Store a maximum age into a variable.
//  d.Store an estimated amount per day(as a number).
//  e.Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.

var favSnack = "chocolate chip";
var currentAge = 15;
var maxAge = 65;
var snacksPerDay = 3;

var lifetimeSupply = (maxAge - currentAge) * snacksPerDay;

document.write("<h1>The Lifetime Supply Calculator</h1>");

document.write("Favourite Snack: " + favSnack + "<br>");
document.write("Current age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + snacksPerDay + "<br>");
document.write(
  "You will need " +
    lifetimeSupply +
    " " +
    favSnack +
    " to last you until the ripe old age of " +
    maxAge
);
