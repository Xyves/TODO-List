import resetPage from "./resetPage";
import toggleTaskClass from "./changeVisibility";
import DetectClick from "./detectClick";
import createItems from "./createMenuItems";
import { createContent } from "./createMenuItems";
import { ToggleProjectClass } from "./changeVisibility";
import { detectProjectClick } from "./detectClick";
import addNewProject from "./createProject";
import createTask, { createNewTaskDiv } from "./createTask";
import HighlightSidebar from "./menuHighlight";
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
  liz();
  allSidebarItems();
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
      // Create new Task Object and push into an array
      let task = new createTask(taskTitle, taskPriority, taskDate);
      // saveToStorage(task);
      TaskArray.push(task);
      createNewTaskDiv(task);
      toggleTaskClass();
    }
  });
}

// Create new project using form
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

function liz() {
  const InboxArray = [];
  const TodayArray = [];
  const NextWeekArray = [];
  const ImportantArray = [];
  const CompletedArray = [];

  const Inbox = document.querySelector("#menuInbox");
  const Today = document.querySelector("#menuToday");
  const NextWeek = document.querySelector("#menuWeek");
  const Important = document.querySelector("#menuImportant");
  const Completed = document.querySelector("#menuCompleted");
  Inbox.addEventListener("click", function () {
    // resetPage();
    createItems("Inbox");
    createTaskContainer();
    // HighlightSidebar();
  });
  Today.addEventListener("click", function () {
    // resetPage();
    createItems("Today");
    createTaskContainer();
    HighlightSidebar();
  });
  NextWeek.addEventListener("click", function () {
    // resetPage();
    createItems("Next Week");
    createTaskContainer();
    HighlightSidebar();
  });
  Important.addEventListener("click", function () {
    // resetPage();
    createItems("Important");
    createTaskContainer();
    HighlightSidebar();
  });
  Completed.addEventListener("click", function () {
    // resetPage();
    createItems("Completed");
    createTaskContainer();
    // generateIt();
    HighlightSidebar();
  });
  // generateItems()
  // createItems(InboxArray);
}
function createTaskContainer() {
  const tasks = document.createElement("div");
  tasks.classList.add("taskContainer");
  content.appendChild(tasks);
}
function generateItems() {
  // Funkcja która zapisuje w którym jest elemencie za pomocą selected-element, ternary operators albo if statements
  //  (i.e.) klikamy add Task wpisujemy dane, tworzy nam element i podczas tworzenia tego elementu przywolujemy funkcje ktora patrzy ktory menu element jest aktualnie wybrany, jezeli to "Today" to dodaje to do "arraya Today"
  // W kazdym addEventListenerze (Inbox,Today...) będzie funkcja egzekwowana która będzie z tego arraya tworzyć itemy za każdym klikie m
}
function checkSelected() {
  const element = document.querySelector(".sidebar-active");
  console.log(element, "Hi");
}
function generateIt() {
  createItems();
  createContent();
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
// function
function allSidebarItems() {
  const element = document.querySelectorAll(".sidebarEl");
  element.forEach((e) => {
    resetPage();
  });
}
