import resetPage from "./resetPage";
import toggleTaskClass from "./changeVisibility";
import DetectClick from "./detectClick";
import createItems from "./createMenuItems";
import { ToggleProjectClass } from "./changeVisibility";
import { detectProjectClick } from "./detectClick";
import addNewProject from "./createProject";
import createTask, { createNewTaskDiv } from "./createTask";
import { createNewProjectDiv } from "./createProject";
import saveToStorage from "./localStorage";
const inbox = document.querySelector("#menuInbox");
const content = document.querySelector(".content");

export default function () {
  createItems();
  addNewTask();
  NewListItem();
  showProjectModal();
  HighlightSidebar();
  newTask();
}

function HighlightSidebar() {
  const content = document.querySelector(".content");
  const allMenuElements = document.querySelectorAll(".menuEl");
  allMenuElements.forEach((menuElement, index) => {
    menuElement.addEventListener("click", function () {
      const mainHeader = document.querySelector(".content h1");
      const tasks = document.createElement("div");
      tasks.classList.add("taskContainer");
      resetPage();
      createItems();
      addNewTask();

      // highlight selected menu element
      menuElement.classList.add("sidebar-active");
      mainHeader.textContent = menuElement.textContent;
      content.prepend(mainHeader);
      content.appendChild(tasks);
    });
  });
}
// On "+" click next to Projects, toggle box visibility to create a new Project
function showProjectModal() {
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
// On "Add new Task" click, toggle box visibility to create new Task
function addNewTask() {
  const addTaskBtn = document.querySelector(".addTaskBtn");
  addTaskBtn.addEventListener("click", function () {
    setTimeout(() => {
      toggleTaskClass();
      DetectClick();
    });
  });
}

// Add new task
function newTask() {
  const TaskArray = [];
  const buttonAdd = document.querySelector(".button-add");
  buttonAdd.addEventListener("click", function (e) {
    e.preventDefault();
    const taskTitle = document.querySelector("#taskTitle").value;
    const taskPriority = document.querySelector("#taskPriority").value;
    const taskDate = document.querySelector("#taskDate").value;
    const divElements = document.querySelectorAll(".menuEl");
    if (taskTitle == "") {
      console.log("error");
    } else {
      // for (const divElement of divElements) {
      //   if (divElement.getElementsByClassName("sidebar-active")) {
      //     console.log(divElement);
      //   } else {
      //     console.log("I can't find it ");
      //   }
      // }
      const element = document.querySelector(".sidebar-active");
      console.log(element);
      // Create new Task Object and push into an array
      let task = new createTask(taskTitle, taskPriority, taskDate);
      // saveToStorage(task);
      console.log(task);

      TaskArray.push(task);
      createNewTaskDiv(task);
      toggleTaskClass();
    }
  });
}

// Take value from the project form and add to sidebar
function NewListItem() {
  const projects = [];
  const buttonAdd = document.querySelector(".button-add-project");
  buttonAdd.addEventListener("click", function (e) {
    e.preventDefault();
    const projectTitle = document.querySelector("#form-id").value;
    console.log(projectTitle);
    if (projectTitle == "") {
      console.log("something went wrong");
    } else {
      // Create new Object and push into an Array
      let project = new addNewProject(projectTitle);
      projects.push(project);

      createNewProjectDiv(project);
      ToggleProjectClass();
      detectProjectClick();
      HighlightSidebar();
    }
  });
}

// Create inbox content
export function createInbox() {
  const mainHeader = document.querySelector(".content h1");

  mainHeader.textContent = "Inbox";
  content.prepend(mainHeader);
  inbox.classList.add("sidebar-active");
  const tasks = document.createElement("div");
  tasks.classList.add("taskContainer");
  content.appendChild(tasks);
}
