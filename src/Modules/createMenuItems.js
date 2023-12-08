import resetPage from "./resetPage";
import { handleMenuDefaultType, loadLocalStorage, handleMenu } from "./Events";
const content = document.querySelector(".content");
export function createProjectHeader(text) {
  const mainHeader = document.createElement("h1");
  mainHeader.textContent = text;
  content.prepend(mainHeader);
}
export function createItemsDiv(text) {
  const addTaskBtn = document.createElement("div");
  const addTaskText = document.createElement("p");
  const taskContainer = document.querySelector(".taskContainer");

  addTaskText.textContent = "Add new Task";
  addTaskBtn.classList.add("addTaskBtn");

  createProjectHeader(text);
  taskContainer.appendChild(addTaskBtn);
  addTaskBtn.appendChild(addTaskText);
}

export function createInbox() {
  const menuElement = document.querySelector("#menuInbox");
  menuElement.classList.add("sidebar-active");
  createTaskContainer();
  createItemsDiv("Inbox");
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

  console.log(project);
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
  projectContainer.addEventListener("click", function () {
    handleMenu(project);
  });
  createdProjects.appendChild(projectContainer);

  const elements = document.querySelectorAll(".menuElement");
  elements.forEach((project) => {
    project.classList.remove("sidebar-active");
    console.log("inside");
  });
  console.log("After");
  projectContainer.classList.add("sidebar-active");
}

export function createTaskContainer() {
  const content = document.querySelector(".content");
  const tasks = document.createElement("div");
  tasks.classList.add("taskContainer");
  content.appendChild(tasks);
}
export function setProjectOption(title) {
  const formProjectOption = document.querySelector("#selectProject");
  const option = document.createElement("option");
  option.setAttribute("id", title);
  option.setAttribute("value", title);
  option.textContent = title;
  formProjectOption.appendChild(option);
}
