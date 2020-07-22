// 2.  use HTML code of question 1 and  show the result on browser.
// i.What is node type of  element having id “form - content”.
// ii.Show node type of element having id “lastName” and its child node.
// iii.Update child node of element having id “lastName”.
// iv.Get First and last child of id “main - content”.
// v.Get next and previous siblings of id “lastName”.
// vi.Get parent node and node type of element having id “email”

var formContent = document.getElementById("form-content");
var lastName = document.getElementById("last-name");
var mainContent = document.getElementById("main-content");
var email = document.getElementById("email");

var main = document.getElementById("main");

main.innerHTML += formContent.nodeType;

main.innerHTML +=
  "<p>ii.Show node type of element having id “lastName” and its child node.</p>";

main.innerHTML += lastName.nodeType;

main.innerHTML += "<p>iv.Get First and last child of id “main - content”.</p>";
main.innerHTML += mainContent.firstChild.nextSibling.innerHTML;
main.innerHTML += mainContent.lastChild.previousSibling.innerHTML;

main.innerHTML += "<p>v.Get next and previous siblings of id “lastName”.</p>";

main.innerHTML += lastName.nextSibling.nextSibling.innerHTML;
main.innerHTML += lastName.previousSibling.previousSibling.innerHTML;

main.innerHTML +=
  "<p>vi.Get parent node and node type of element having id “email”</p>";

main.innerHTML += email.parentNode.className;
main.innerHTML += email.nodeType;
