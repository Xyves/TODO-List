export default function () {
  removeClass();
}
function removeClass() {
  const modalBox = document.querySelector(".modal-box");
  modalBox.classList.toggle("none");
  modalBox.classList.add("visible");
}
export function ToggleProjectClass() {
  removeProjectClass();
}
function removeProjectClass() {
  const projectBox = document.querySelector(".project-box");
  projectBox.classList.toggle("none");
  projectBox.classList.add("visible");
}
