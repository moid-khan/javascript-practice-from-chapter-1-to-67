// 13. Write a JavaScript function that accepts two arguments,
// a string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments: 'JSResourceS.com', 'o'

console.log(("str1,str2,str3,str4".match(/,/g) || []).length); //logs 3

var str = "JSResourceS.com";

function letterCount(str) {
  return (str.match(/o/g) || []).length;
}

alert(letterCount(str));
