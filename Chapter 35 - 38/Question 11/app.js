// 12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// EXAMPLE STRING: 'Web Development Tutorial'  EXPECTED OUTPUT: 'Development'

var str = "Web Development Tutorial";

function longestWord(string) {
  var str = string.split(" ");
  var longest = 0;
  var word = null;
  str.forEach(function (str) {
    if (longest < str.length) {
      longest = str.length;
      word = str;
    }
  });
  return word;
}
alert(longestWord(str));
