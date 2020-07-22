// 15. Write a program to take password as an input from user.The password must qualify these requirements: a.
// It should contain alphabets and numbers b.It should not start with a number c.It must at least 6
// characters long If the password does not meet above requirements, prompt the user to enter a valid password.
// For character codes of a - z, A - Z & 0 - 9, refer to ASCII table at the end of this document.

var password = prompt("Enter you password:");

for (var i = 0; i < password.length; i++) {
  if (
    (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 122) ||
    (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57)
  ) {
    if (password.length <= 6) {
      if (
        Number(password.slice(0, 1)) > 0 &&
        Number(password.slice(0, 1)) <= 9
      ) {
        document.write("<h1>Password should not start with a number</h>");
        break;
      } else {
        document.write(
          "<h1>Congratulations! Your password is " + password + "</h>"
        );
        break;
      }
    } else {
      document.write("<h1>Password must be 6 characters long</h>");
      break;
    }
  } else {
    document.write("<h1>Enter a valid password</h>");
    break;
  }
}
