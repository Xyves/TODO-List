export default function () {
  removeClass();
}
function removeClass() {
  const modalBox = document.querySelector(".modal-box");
  modalBox.classList.toggle("none");
}
