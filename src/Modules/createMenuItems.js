import resetPage from "./resetPage";
import { handleMenuType } from "./Events";
export default function createItems(text) {
  const content = document.querySelector(".content");
  const mainHeader = document.createElement("h1");
  const addTaskBtn = document.createElement("div");
  const addTaskText = document.createElement("p");
  const taskContainer = document.querySelector(".taskContainer");

  mainHeader.textContent = text;
  addTaskText.textContent = "Add new Task";
  addTaskBtn.classList.add("addTaskBtn");

  content.prepend(mainHeader);
  taskContainer.appendChild(addTaskBtn);
  addTaskBtn.appendChild(addTaskText);
}

export function createInbox() {
  const menuElement = document.querySelector("#menuInbox");
  resetPage();
  menuElement.classList.add("sidebar-active");
  createTaskContainer();
  createItems("Inbox");
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

export function createProjectDiv(project) {
  const createdProjects = document.querySelector(".created-projects");
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project");
  const projectTmpl = document.querySelector("#projectTmpl");
  projectContainer.append(projectTmpl.content.cloneNode(true));
  projectContainer.querySelector(".projectName").textContent = project.title;
  projectContainer.addEventListener("click", function () {
    handleMenuType(project.title);
  });
  createdProjects.appendChild(projectContainer);
  createdProjects.querySelectorAll(".project").forEach((project) => {
    project.classList.remove("sidebar-active");
  });
  projectContainer.classList.add("sidebar-active");
}

export function createTaskContainer() {
  const content = document.querySelector(".content");
  const tasks = document.createElement("div");
  tasks.classList.add("taskContainer");
  content.appendChild(tasks);
}
