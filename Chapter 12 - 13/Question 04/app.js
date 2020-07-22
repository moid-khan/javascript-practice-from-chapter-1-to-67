// 4. Write a program that takes a character(i.e.string of length 1) and returns true if it is a vowel, false otherwise

var checkVowel = prompt(
  "Enter a single character to check if it is a Vowel or not:"
);

if (
  checkVowel === "a" ||
  checkVowel === "e" ||
  checkVowel === "i" ||
  checkVowel === "o" ||
  checkVowel === "u"
) {
  document.write("Input character is a Vowel");
} else {
  document.write("Input character is not a Vowel");
}
