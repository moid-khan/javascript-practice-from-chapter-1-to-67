// i.Get element of id “main - content” and assign them in a variable.
// ii.Display all child elements of “main - content” element.
// iii.Get all elements of class “render” and show their innerHTML in browser.
// iv.Fill input value whose element id first - name using javascript.
// v.Repeat part iv for id ”last - name” and “email”.

var mainContent = document.getElementById("main-content");
var main = document.getElementById("main");
var render = document.getElementsByClassName("render");
var mainRender = document.getElementById("main-render");
var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");
var email = document.getElementById("email");
var children = mainContent.childNodes;

var elements = [];

for (var i = 0; i < mainContent.childNodes.length; i++) {
  var child = mainContent.childNodes[i];
  if (child.nodeType == 1) {
    elements.push(child);
  }
}

var inText = elements[0].innerText;
var text = document.createTextNode(inText);

var inText2 = elements[1].innerText;
var text2 = document.createTextNode(inText2);

var inText3 = elements[2].innerText;
var text3 = document.createTextNode(inText3);

var inText4 = elements[3].innerText;
var text4 = document.createTextNode(inText4);

var inText5 = elements[4].innerText;
var text5 = document.createTextNode(inText5);

main.appendChild(text);
main.appendChild(text2);
main.appendChild(text3);
main.appendChild(text4);
main.appendChild(text5);

console.log(render[0].innerHTML);

for (var i = 0; i < render.length; i++) {
  mainRender.innerHTML += render[i].innerHTML;
}

firstName.value = "Set Value using JS";
lastName.value = "Set Value using JS";
email.value = "Set Value using JS";
