// 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.After searching,
// prompt the user whether the given item is found in the list or not.Note: Perform case insensitive search.
// Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.

var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var searchItem = prompt("Enter an item to search:");

var isValid = false;

for (var i = 0; i < A.length; i++) {
  if (searchItem.toLowerCase() === A[i]) {
    document.write(
      "<h1>" +
        searchItem +
        " is available at index " +
        i +
        " in our bakery</h1>"
    );
    isValid = true;
  }
}

if (!isValid) {
  document.write(
    "<h1>We are sorry. " +
      searchItem +
      " is <strong>not available</strong> in our bakery</h1>"
  );
}
