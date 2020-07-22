// 7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
//  Write a program to enable “search by user input” in an array.After searching,
// prompt the user whether the given item is found in the list or not.Example:

var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var search = prompt(
  "Welcome to ABC Bakery. What do you want to order sir/ma'am?"
);

var notFound = true;

for (var i = 0; i < A.length; i++) {
  if (A[i] === search) {
    document.write(
      search + " is <strong>available</strong> at index " + i + " in our Bakery"
    );
    notFound = true;
    break;
  } else {
    notFound = false;
  }
}

if (!notFound) {
  document.write(
    "We are sorry. " +
      search +
      " is <strong>not available</strong> in our Bakery"
  );
}
