// 3. In previous assignment you have created a tabular data using javascript.Let’s modify that.
// Create a form which takes student’s details and show each student detail in table.
// Each row of table must contain a delete button and an edit button.
// On click on delete button entire row should be deleted.
// On click on edit button, a hidden form will appear with the values of that row.

var table = document.getElementById("table");

var count = 0;
var txt = "Delete";

function delete_row(e) {
  e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
}

function edit_row(e) {
  var editName = prompt(
    "Enter updated Name",
    e.parentNode.parentNode.childNodes[1].innerText
  );

  var editClass = prompt(
    "Enter updated Class",
    e.parentNode.parentNode.childNodes[2].innerText
  );

  e.parentNode.parentNode.childNodes[1].innerText = editName;
  e.parentNode.parentNode.childNodes[2].innerText = editClass;
}

function insertData() {
  var name = document.getElementById("txtName");
  var _class = document.getElementById("txtClass");

  var tr = document.createElement("tr");
  var tdIndex = document.createElement("td");
  var tdName = document.createElement("td");
  var tdClass = document.createElement("td");
  var tdBtn = document.createElement("td");
  var btnDelete = document.createElement("button");
  var btnEdit = document.createElement("button");

  if (name.value != "" && _class.value != "") {
    var countText = document.createTextNode(count++);
    var nameText = document.createTextNode(name.value);
    var classText = document.createTextNode(_class.value);
    var btnDeleteText = document.createTextNode("Delete");
    var btnEditText = document.createTextNode("Edit");

    btnDelete.setAttribute("onclick", "delete_row(this)");
    btnEdit.setAttribute("onclick", "edit_row(this)");

    tdIndex.appendChild(countText);
    tdName.appendChild(nameText);
    tdClass.appendChild(classText);
    btnDelete.appendChild(btnDeleteText);
    btnEdit.appendChild(btnEditText);

    tr.appendChild(tdIndex);
    tr.appendChild(tdName);
    tr.appendChild(tdClass);
    tr.appendChild(tdBtn);

    tdBtn.appendChild(btnEdit);
    tdBtn.appendChild(btnDelete);

    table.appendChild(tr);

    name.value = "";
    _class.value = "";
  } else {
    alert("Input feilds can't be empty");
  }
}
