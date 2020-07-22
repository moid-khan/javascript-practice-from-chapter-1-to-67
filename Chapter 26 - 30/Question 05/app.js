// 4. Write a program that simulates a dice using random() method of JS Math class.
// Display the value of dice in your browser.

var randCoin = Math.floor(Math.random() * 2 + 1);
var coin;

if (randCoin === 1) {
  coin = "Heads";
  document.write(
    "<h1>" + randCoin + "<br>Random dice value: " + coin + "</h1>"
  );
} else {
  coin = "Tails";
  document.write(
    "<h1>" + randCoin + "<br>Random dice value: " + coin + "</h1>"
  );
}
