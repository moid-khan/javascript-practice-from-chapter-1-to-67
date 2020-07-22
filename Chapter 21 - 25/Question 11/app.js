// 11. Write a program that takes user input.Convert and show the input in title case.

var inp = prompt();
function titleCase(string) {
  var sentence = string.toLowerCase().split(" ");
  for (var i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  document.write(sentence.join(" "));
  return sentence;
}
titleCase(inp);
