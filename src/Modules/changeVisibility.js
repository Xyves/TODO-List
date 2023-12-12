import { setTask } from "./Events";
export function toggleTaskClass() {
  const modalBox = document.querySelector(".modal-box");
  modalBox.classList.toggle("none");
  modalBox.classList.toggle("visible");
}

export function ToggleProjectClass() {
  const projectBox = document.querySelector(".project-box");
  projectBox.classList.toggle("none");
  projectBox.classList.add("visible");
}

// Switch modal visibility when clicking outside the addTask form
export function detectTaskClick() {
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
    const cancelProject = document.querySelector(".button-project-cancel");
    const uniqueTitle = document.querySelector("#uniqueTitle");

    if (projectBox.contains(e.target)) {
      if (e.target === cancelProject) {
        projectBox.classList.add("none");
        projectBox.classList.remove("visible");
        uniqueTitle.textContent = "";
      } else {
      }
    } else {
      projectBox.classList.add("none");
      projectBox.classList.remove("visible");
      uniqueTitle.textContent = "";
    }
  });
}
export function showProjectModal() {
  const addProject = document.querySelector(".add-project-modal");
  addProject.addEventListener("click", function () {
    const form = document.querySelector(".addProject");
    form.reset();
    setTimeout(() => {
      ToggleProjectClass();
      detectProjectClick();
    });
  });
}
// Change task modal visibility
export function showTaskModal() {
  const addTaskBtn = document.querySelector(".addTaskBtn");
  if (addTaskBtn) {
    addTaskBtn.addEventListener("click", function () {
      setTimeout(() => {
        toggleTaskClass();
        detectTaskClick();
        // setTask();
      });
    });
  }
}
