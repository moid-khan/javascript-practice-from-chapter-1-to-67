// 7. Write a function that take start and end number as inputs & display counting in your browser.

function counting(startNum, endNum) {
  for (var i = startNum; i <= endNum; i++) {
    document.write(i + "<br>");
  }
}

counting(1, 10);
