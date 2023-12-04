export default function () {
  const modalBox = document.querySelector(".modal-box");
  modalBox.classList.toggle("none");
  modalBox.classList.toggle("visible");
}

export function ToggleProjectClass() {
  const projectBox = document.querySelector(".project-box");
  projectBox.classList.toggle("none");
  projectBox.classList.add("visible");
}
