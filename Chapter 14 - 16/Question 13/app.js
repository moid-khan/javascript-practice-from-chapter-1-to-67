// Create a new array.Store values one by one in such a way that you can access the
// values in the order in which they were stored. (FIFO - First In First Out)

var devices = [];

document.write("Devices:<br>keyboard,mouse,printer,monitor<br><br>");

devices.push("keyboard");
document.write("Out:<br>" + devices + "<br>");
devices.shift();
devices.push("mouse");
document.write("Out:<br>" + devices + "<br>");
devices.shift();
devices.push("printer");
document.write("Out:<br>" + devices + "<br>");
devices.shift();
devices.push("monitor");
document.write("Out:<br>" + devices + "<br>");
devices.shift();
