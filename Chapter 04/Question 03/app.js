// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______, ______ and ______.For example $my_1stVariable
// c) Variables must begin with a ______, ______ or _____.For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

document.write("<h1>Rules for naming JS variables</h1><br>");

var legalOne = "numbers";
var legalTwo = "$";
var legalThree = "_";
var legalFour = "$my_1stVariable";

document.write(
  "Variable names can only contain , " +
    legalOne +
    " , " +
    legalTwo +
    " and " +
    legalThree +
    " . For example: " +
    legalFour +
    "<br>"
);

document.write(
  "Variables must begin with a " +
    legalTwo +
    " or " +
    legalThree +
    " . For example: $name, _name or name<br>"
);

document.write("Variable names are case sensitive<br>");

document.write("Variable names should not be JS keywords");
