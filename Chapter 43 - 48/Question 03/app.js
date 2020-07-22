// 3. Display 10 student records in table and each row should contain a delete button.
// If you click on a button to delete a record, entire row should be deleted.

function delete_row(e) {
  e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
}
