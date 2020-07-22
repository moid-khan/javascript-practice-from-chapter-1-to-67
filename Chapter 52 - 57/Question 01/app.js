var btnClose = document.getElementById("btnClose");
var modal = document.getElementById("modal");

function getImage(e) {
  var modalImage = document.getElementById("modalImage");

  modal.style.display = "block";
  btnClose.style.display = "block";
  modalImage.src = e.src;
}

function closeModal() {
  btnClose.style.display = "none";
  modal.style.display = "none";
}
