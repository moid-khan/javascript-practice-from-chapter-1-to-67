// 4. Cost of one movie ticket is 600 PKR.Write a script to store ticket price in a
// variable & calculate the cost of buying 5 tickets
// to a movie.Example output:

var ticketPrice = 600;

var totalTickets = 5;

var totalPrice = ticketPrice * totalTickets;

document.write(
  "<h1>Total cost to buy " +
    totalTickets +
    " tickets to a movie is " +
    totalPrice +
    "PKR</h1>"
);
