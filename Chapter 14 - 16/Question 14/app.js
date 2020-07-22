// Create a new array.Store values one by one in such a way that you can access the
// values in the order in which they were stored. (FIFO - First In First Out)

var devices = [];

document.write("Devices:<br>keyboard,mouse,printer,monitor<br><br>");

devices.unshift("monitor");
document.write("Out:<br>" + devices + "<br>");
devices.pop();
devices.unshift("printer");
document.write("Out:<br>" + devices + "<br>");
devices.pop();
devices.unshift("mouse");
document.write("Out:<br>" + devices + "<br>");
devices.pop();
devices.unshift("keyboard");
document.write("Out:<br>" + devices + "<br>");
devices.pop();
