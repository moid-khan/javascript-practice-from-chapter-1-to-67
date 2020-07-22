// 2. Any year is entered through the keyboard.Write a function to determine whether the year is a leap year or not.

function checkLeapYear(year) {
  if (year % 4 === 0) {
    return year + " is a Leap year";
  } else {
    return year + " is not a Leap year";
  }
}

console.log(checkLeapYear(2012));
console.log(checkLeapYear(2016));
console.log(checkLeapYear(2020));
