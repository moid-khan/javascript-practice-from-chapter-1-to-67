// 7. Write a function with switch statement to count the number of occurrences of any two vowels
// in succession in a line of text.
// For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.

var sentence = "Pleases read this application and give me gratuity";

function countTwoVowels(str) {
  var getSec = str.indexOf("e", str.indexOf("e") + 5);
  var first = str.slice(str.indexOf("e"), str.indexOf("e") + 2);
  var second = str.slice(getSec, getSec + 2);
  var third = str.slice(str.indexOf("u"), str.indexOf("u") + 2);

  switch (first) {
    case "ea":
      document.write("<h1>" + first + "</h1>");
      break;
    default:
      return "Error First";
  }

  switch (second) {
    case "ea":
      document.write("<h1>" + second + "</h1>");
      break;
    default:
      return "Error Second";
  }

  switch (third) {
    case "ui":
      document.write("<h1>" + third + "</h1>");
      break;
    default:
      return "Error Third";
  }
}

countTwoVowels(sentence);
