import resetPage from "./resetPage";
import {
  handleMenuDefaultType,
  loadLocalStorage,
  handleMenu,
  loadInboxLocalStorage,
  setTask,
} from "./Events";
import { showTaskModal } from "./changeVisibility";
const content = document.querySelector(".content");
export function updateHeaderFromSidebar(text) {
  console.log("this is text header" + text);
  const content = document.querySelector(".content");

  const mainHeader = document.createElement("h1");
  mainHeader.textContent = text;
  content.prepend(mainHeader);
}

export function createItemsDiv() {
  const addTaskBtn = document.createElement("div");
  const addTaskText = document.createElement("p");
  const taskContainer = document.querySelector(".taskContainer");

  addTaskText.textContent = "Add new Task";
  addTaskBtn.classList.add("addTaskBtn");
  taskContainer.appendChild(addTaskBtn);
  addTaskBtn.appendChild(addTaskText);
}

export function createInbox() {
  const menuElement = document.querySelector("#menuInbox");
  menuElement.classList.add("sidebar-active");
  createTaskContainer();
  loadInboxLocalStorage();
  updateHeaderFromSidebar("Inbox");
  setTask();
  showTaskModal();
}

export function createTaskDiv(task) {
  const taskContainer = document.querySelector(".taskContainer");
  const taskTemplate = document.querySelector("#TodoTaskTemplate");
  const taskDiv = document.createElement("div");
  const taskId = task.id;
  const date = task.date;
  taskDiv.classList.add("todo-item", "task-item" + taskId);

  taskDiv.append(taskTemplate.content.cloneNode(true));

  taskContainer.prepend(taskDiv);
  taskDiv.querySelector(".toDoTaskName").textContent = task.title;
  taskDiv.querySelector(".toDoTaskDate").textContent = date;

  const priorityElement = taskDiv.querySelector(".taskPriority");
  const priority = task.priority;
  switch (priority) {
    case "priorityLow":
      priorityElement.classList.add("project-green");
      break;
    case "priorityMedium":
      priorityElement.classList.add("project-yellow");
      break;
    case "priorityHigh":
      priorityElement.classList.add("project-red");
      break;
  }

  taskDiv.addEventListener("click", function () {
    priorityElement.classList.toggle("fa-circle");
    priorityElement.classList.toggle("fa-circle-check");
  });
}
export function createNewProject(project) {
  const createdProjects = document.querySelector(".created-projects");
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project", "menuElement");
  const projectTmpl = document.querySelector("#projectTmpl");
  projectContainer.append(projectTmpl.content.cloneNode(true));
  projectContainer.querySelector(".projectName").textContent = project.name;

  console.log(project.name);
  projectContainer.addEventListener("click", function () {
    handleMenu(project.name);
    projectContainer.classList.add("sidebar-active");
  });

  createdProjects.appendChild(projectContainer);
}
export function createProjectDiv(project) {
  const createdProjects = document.querySelector(".created-projects");
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project", "menuElement");
  const projectTmpl = document.querySelector("#projectTmpl");
  projectContainer.append(projectTmpl.content.cloneNode(true));
  projectContainer.querySelector(".projectName").textContent = project.title;
  projectContainer.classList.add("sidebar-active");
  projectContainer.addEventListener("click", function () {
    handleMenu(project.title);
    handleProjectClick(projectContainer);
  });
  createdProjects.appendChild(projectContainer);
}
function handleProjectClick(clickedProject) {
  const elements = document.querySelectorAll(".menuElement");
  elements.forEach((project) => {
    project.classList.remove("sidebar-active");
  });
  clickedProject.classList.add("sidebar-active");
}

export function createTaskContainer() {
  const taskContainer = document.createElement("div");
  taskContainer.classList.add("taskContainer");
  content.appendChild(taskContainer);
  createItemsDiv();
}
export function setProjectOption(title) {
  const formProjectOption = document.querySelector("#selectProject");
  const option = document.createElement("option");
  option.setAttribute("id", title);
  option.setAttribute("value", title);
  option.textContent = title;
  formProjectOption.appendChild(option);
}
