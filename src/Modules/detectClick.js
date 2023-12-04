// Switch modal visibility when clicking outside the addTask form
export default function () {
  window.addEventListener("click", function (e) {
    const modalBox = document.querySelector(".modal-box");
    const modalCancelBtn = document.querySelector(".button-project-cancel");

    const cancelTask = document.querySelector(".btn-task-cancel");
    modalCancelBtn.addEventListener("click", () => {
      modalBox.classList.add("none");
      modalBox.classList.remove("visible");
    });

    if (modalBox.contains(e.target)) {
      if (e.target === cancelTask) {
        modalBox.classList.add("none");
        modalBox.classList.remove("visible");
      } else {
        console.log("You clicked inside!");
      }
      console.log("You clicked inside!");
    } else {
      modalBox.classList.add("none");
      modalBox.classList.remove("visible");
    }
  });
}

// Switch modal visibility when clicking outside the project form
export function detectProjectClick() {
  window.addEventListener("click", function (e) {
    const projectBox = document.querySelector(".project-box");
    const addProject = document.querySelector(".button-add-project");
    const cancelProject = document.querySelector(".button-project-cancel");

    if (projectBox.contains(e.target)) {
      if (e.target === cancelProject) {
        projectBox.classList.add("none");
        projectBox.classList.remove("visible");
      } else {
        console.log("You clicked inside!");
      }
      console.log("You clicked inside!");
    } else {
      projectBox.classList.add("none");
      projectBox.classList.remove("visible");
    }
  });
}
