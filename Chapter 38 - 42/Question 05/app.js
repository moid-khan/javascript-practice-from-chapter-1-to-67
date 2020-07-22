// 5. You have learned the function indexOf.
// Code your own custom function that will perform the same functionality.
// You can code for single character as of now.

function findIndex(str, character) {
  var isValid = false;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === character) {
      isValid = true;
      return i;
      break;
    }
  }

  if (!isValid) {
    return character + " is not available in " + str;
  }
}

document.write("<h1>" + findIndex("pakistan", "t") + "</h1>");
