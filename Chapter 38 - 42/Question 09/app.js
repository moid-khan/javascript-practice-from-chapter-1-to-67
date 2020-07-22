// 9. Write a program to calculate overtime pay of employees.Overtime is paid at the rate of
// Rs. 12.00 per hour for every hour worked above 40 hours.
// Assume that employees do not work for fractional part of an hour.

function overtimePay(noOfEmployes) {
  var count = 1,
    working_hours,
    over_time;
  var over_time_pay;

  while (count <= noOfEmployes) {
    working_hours = prompt(
      "Enter the working hours of employee no " + count + ":"
    );
    if (working_hours > 40) {
      over_time = working_hours - 40;
      over_time_pay = over_time * 12.0;
      document.write(
        "<h1>Employee No " +
          count +
          " overtime pay is " +
          over_time_pay +
          "</h1>"
      );
    } else
      document.write(
        "<h1>You have to work for more than 40 hours to get over time pay</h1>"
      );

    count++;
  }
}

overtimePay(2);
