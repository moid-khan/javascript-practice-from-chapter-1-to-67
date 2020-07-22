// 7. Declare and Initialize an array and store available education qualifications in
// Pakistan(e.g.SSC, HSC, BCS, BS, BCOM, MS, M.Phil., PhD).
// Show the listed qualifications in your browser like:

var qualificationsInPakistan = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M.Phil",
  "PhD",
];

document.write("<h1>Qualifications:</h1>");
for (var i = 0; i < qualificationsInPakistan.length; i++) {
  document.write("<h1>" + qualificationsInPakistan[i] + "</h1>");
}
