// 6. Write a function to delete all vowels from a sentence.
// Assume that the sentence is not more than 25 characters long.

var str = "afoeoibuaru";

function deleteVowels(sentence) {
  sentence = sentence.replace(/a/g, "");
  sentence = sentence.replace(/e/g, "");
  sentence = sentence.replace(/i/g, "");
  sentence = sentence.replace(/o/g, "");
  sentence = sentence.replace(/u/g, "");
  return sentence;
}

document.write("<h1>Orignal String: " + str + "</h1>");
document.write("<h1>Without Vowels: " + deleteVowels(str) + "</h1>");
