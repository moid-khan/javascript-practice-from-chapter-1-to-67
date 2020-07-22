// 5. Show a counter in browser.Counter should increase on click on increase button and
// decrease on click on decrease button.And show updated counter value in browser.

var counter = document.getElementById("counter");

var count = 0;

function countIncrease() {
  count++;
  counter.innerHTML = count;
}

function countDecrease() {
  count--;
  counter.innerHTML = count;
}
