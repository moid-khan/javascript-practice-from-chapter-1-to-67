// 18. You have a string “The quick brown fox jumps over the lazy dog”.
// Write a program to count number of occurrences of word “the” in given string.

var str = "The quick brown fox jumps over the lazy dog";

function occurrences(string, subString, allowOverlapping) {
  string += "";
  subString += "";
  if (subString.length <= 0) return string.length + 1;

  var n = 0,
    pos = 0,
    step = allowOverlapping ? 1 : subString.length;

  while (true) {
    pos = string.indexOf(subString, pos);
    if (pos >= 0) {
      ++n;
      pos += step;
    } else break;
  }
  return n;
}

document.write(occurrences(str.toLowerCase(), "the"));
