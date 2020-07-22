// 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

var date = new Date();

var hours = date.getHours();

var ap;

if (hours <= 12) {
  ap = "AM";
  alert("Its " + ap);
} else {
  ap = "PM";
  alert("Its " + ap);
}
