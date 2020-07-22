// 4. Write a program to take input remaining fuel in car(in litres) from user.
// If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”

var fuel = +prompt("Enter remaining fuel in your car(in litres):");

if (fuel < 0.25) {
  document.write("Please refill the fuel in your car");
}
