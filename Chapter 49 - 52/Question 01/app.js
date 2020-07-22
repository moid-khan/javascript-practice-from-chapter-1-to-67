// 1. Create a signup form and display form data in your web page on submission.

function getData() {
  var firstName = document.getElementById("txtFirstName");
  var lastName = document.getElementById("txtLastName");
  var email = document.getElementById("txtEmail");
  var password = document.getElementById("txtPassword");

  var showData = document.getElementById("formData");

  var formData = [firstName, lastName, email, password];

  for (var i = 0; i < formData.length; i++) {
    showData.innerHTML += formData[i].value + "   ";
  }
}
