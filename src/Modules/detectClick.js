// Switch visibility when clicking outside the addTask form
export default function () {
  window.addEventListener("click", function (e) {
    const modalBox = document.querySelector(".modal-box");
    const modalCancelBtn = document.querySelector(".button-project-cancel");
    modalCancelBtn.addEventListener("click", () => {
      modalBox.classList.add("none");
      modalBox.classList.remove("visible");
    });
    if (modalBox.contains(e.target)) {
      console.log("You clicked inside!");
    } else {
      modalBox.classList.add("none");
      modalBox.classList.remove("visible");
    }
  });
}

// Switch visibility when clicking outside the project form
export function detectProjectClick() {
  window.addEventListener("click", function (e) {
    const projectBox = document.querySelector(".project-box");
    const addProject = document.querySelector(".button-add-project");
    if (projectBox.contains(e.target) && (addProject.clicked = "false")) {
      console.log("You clicked inside!");
    } else {
      projectBox.classList.add("none");
      projectBox.classList.remove("visible");
    }
  });
}
