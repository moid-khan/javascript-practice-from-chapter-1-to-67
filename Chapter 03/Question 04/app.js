// 4. A visitor visits an online clothing store www.xyzClothing.com.Write a script to store in variables the
// following information:
// a.Visitor’s name
// b.Product title
// c.Quantity
// i.e.how many products a visitor wants to
//  order Show the following message in your
// browser: “John Doe ordered 5 T - shirt(s) on XYZ Clothing store”.

var visitorName = "John Doe";
var productTitle = "T-Shirts(s)";
var quantity = 5;
var storeName = "XYZ Clothing store";

document.write(
  "<h1>" +
    visitorName +
    " ordered " +
    quantity +
    " " +
    productTitle +
    " on " +
    storeName +
    "</h1>"
);
