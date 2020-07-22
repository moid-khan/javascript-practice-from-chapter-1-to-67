// 10. Write a JavaScript function that checks whether a passed string is palindrome or not ?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.

function checkPalindrome(word) {
  var revString = "";
  var lowerWord = word.toLowerCase();
  for (var i = word.length - 1; i >= 0; i--) {
    revString += lowerWord[i];
  }
  if (revString != "") {
    if (revString === lowerWord) {
      return "The word " + word + " is Palindrome";
    } else {
      return "The word " + word + " is not a Palindrome";
    }
  } else {
    return "Please Enter a word!!!";
  }
}

document.write(
  "<h1>" +
    checkPalindrome(prompt("Enter a word to check is palindrome or not")) +
    "</h1>"
);
