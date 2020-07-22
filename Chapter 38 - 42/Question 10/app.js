// 10. A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is
// input through the keyboard in hundreds,
// find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.

function currencyDenomination(cash) {
  var hundred = parseInt(cash / 100);
  var fifty = parseInt((cash % 100) / 50);
  var ten = parseInt(((cash % 100) % 50) / 10);
  document.writeln(
    "<h1>You will have ",
    hundred,
    " hundred notes ",
    fifty,
    " fifty notes ",
    ten,
    " ten notes.</h1>"
  );
}
currencyDenomination(470);
