import resetPage from "./resetPage";
import { createInbox } from "./createMenuItems";
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
      }
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
      });
    });
  }
}
export function removeTaskLogic() {
  const removeButtons = document.querySelectorAll(".todo-item .taskRemove");
  removeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const todoItem = button.closest(".todo-item");
      const uniqueId = todoItem.id;
      const taskUniqueId = uniqueId.charAt(uniqueId.length - 1);
      if (todoItem) {
        todoItem.remove();
      }
      removeFromLocalStorage(taskUniqueId, null);
    });
  });
}

// Get data from local storage
function removeFromLocalStorage(uniqueId, text) {
  const userInfo = localStorage.getItem("projectTasks");
  const userInfoParsed = JSON.parse(userInfo) || [];
  if (uniqueId !== null) {
    for (const key in userInfoParsed) {
      if (userInfoParsed.hasOwnProperty(key)) {
        for (let i = 0; i < userInfoParsed[key].length; i++) {
          const task = userInfoParsed[key][i];

          if (task.id == uniqueId) {
            userInfoParsed[key].splice(i, 1);
            i--;
            localStorage.setItem(
              "projectTasks",
              JSON.stringify(userInfoParsed)
            );
          }
        }
      }
    }
  } else if (text !== undefined && text !== null) {
    for (const key in userInfoParsed) {
      if (userInfoParsed.hasOwnProperty(key) && key === text) {
        delete userInfoParsed[key];
      }
    }
    localStorage.setItem("projectTasks", JSON.stringify(userInfoParsed));
  }
}

export function removeProjectLogic() {
  const removeButtons = document.querySelectorAll(".project .projectRemove");
  removeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const project = button.closest(".project");
      const text = project.querySelector(".projectName").textContent;
      if (project) {
        console.log("Removed Project:", text);
        project.remove();
        removeOption(text);
        removeFromLocalStorage(null, text);
        resetPage();
        createInbox();
      }
    });
  });
}

function removeOption(text) {
  const select = document.querySelector("#selectProject");
  const optionToRemove = select.querySelector(`option[value="${text}"]`);
  if (optionToRemove) {
    optionToRemove.remove();
  }
}
export function hideSidebar(){
  const button = document.querySelector(".fa-square-caret-left")
  const sidebar = document.querySelector(".sidebar")
  button.addEventListener("click",()=>{
sidebar.classList.toggle("sidebar-show")
sidebar.classList.toggle("sidebar-hide")
  })
}