import resetPage from "./resetPage";
import {
  handleMenuDefaultType,
  loadLocalStorage,
  handleMenu,
  loadInboxLocalStorage,
  setTask,
  loadLocalStorageTask,
} from "./Events";
import {
  removeTaskLogic,
  removeProjectLogic,
  showTaskModal,
} from "./changeVisibility";
const content = document.querySelector(".content");

export function updateHeaderFromSidebar(text) {
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
  const title = "Inbox";
  createTaskContainer();
  loadLocalStorageTask(title);
  setTask();
  showTaskModal();
  updateHeaderFromSidebar(title);
}

export function createTaskDiv(task) {
  const taskContainer = document.querySelector(".taskContainer");
  const taskTemplate = document.querySelector("#TodoTaskTemplate");
  const taskDiv = document.createElement("div");
  const taskId = task.id;
  const date = task.date;
  taskDiv.classList.add("todo-item");
  taskDiv.setAttribute("id", "task-item" + taskId);
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
  removeTaskLogic();
}
// load local storage projects
export function createNewProject(project) {
  const createdProjects = document.querySelector(".created-projects");
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project", "menuElement");
  const projectTmpl = document.querySelector("#projectTmpl");
  projectContainer.append(projectTmpl.content.cloneNode(true));
  projectContainer.querySelector(".projectName").textContent = project.name;

  projectContainer.addEventListener("click", function () {
    handleMenu(project.name);
    projectContainer.classList.add("sidebar-active");
    removeProjectLogic();
  });

  createdProjects.appendChild(projectContainer);
}
// Function run when creating new project
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
    removeTaskLogic();
    removeProjectLogic();
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
