// 6. Generate the following series in your browser.
// See example output.
// a.Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b.Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c.Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d.Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e.Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

document.write("<strong>Counting</strong><br><br>");
for (var i = 1; i <= 15; i++) {
  document.write(i + ", ");
}

document.write("<br><br><strong>Reverse Counting</strong><br><br>");
for (var i = 10; i >= 1; i--) {
  document.write(i + ", ");
}

document.write("<br><br><strong>Even</strong><br><br>");
for (var i = 0; i <= 20; i = i + 2) {
  document.write(i + ", ");
}

document.write("<br><br><strong>Odd</strong><br><br>");
for (var i = 1; i <= 20; i = i + 2) {
  document.write(i + ", ");
}

document.write("<br><br><strong>Series</strong><br><br>");
for (var i = 2; i <= 20; i = i + 2) {
  document.write(i + "k, ");
}
