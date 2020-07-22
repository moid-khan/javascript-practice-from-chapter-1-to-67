// 3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = (a + b + c) / 2
// Calculate area of triangle using 2 functions

function areaOfTriangle(a, b, c) {
  var S = (a + b + c) / 2;
  var area = S * (S - a) * (S - b) * (S - c);
  return area;
}

document.write("<h1>" + areaOfTriangle(10, 10, 10) + "</h1>");
