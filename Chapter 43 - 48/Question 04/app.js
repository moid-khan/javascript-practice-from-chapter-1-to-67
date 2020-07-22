// 4. Display an image in browser.Change the picture on mouseover and set the first picture on mouseout.

var img = document.getElementById("img");

function mouseOver() {
  img.src = "images/car2.jpg";
}

function mouseOut() {
  img.src = "images/car1.jpg";
}
