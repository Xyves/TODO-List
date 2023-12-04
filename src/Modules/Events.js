import resetPage from "./resetPage";
import createItems, {
  createTaskDiv,
  createProjectDiv,
  createTaskContainer,
} from "./createMenuItems";
import createTask from "./createTask";
import toggleTaskClass, { ToggleProjectClass } from "./changeVisibility";
import DetectClick, { detectProjectClick } from "./detectClick";
import addNewProject from "./createProject";
import HighlightSidebar from "./menuHighlight";

function getSelectedPage() {
  const selectedElement = document.querySelector(".sidebar-active");
  if (selectedElement) {
    console.log(selectedElement.textContent.trim());
    return selectedElement.textContent.trim();
  }
}
// Functions when loading the page
export default function () {
  NewListItem();
  showProjectModal();
  showTaskModal();
  createDefaultProjects();
  HighlightSidebar();
}

export function createInbox() {
  const menuElement = document.querySelector("#menuInbox");
  resetPage();
  menuElement.classList.add("sidebar-active");
  createTaskContainer();
  createItems("Inbox");
}

// Add new task
function newTask() {
  const projectTasks = {};
  const buttonAdd = document.querySelector(".button-add");

  buttonAdd.addEventListener("click", function (e) {
    e.preventDefault();

    const taskTitle = document.querySelector("#taskTitle").value;
    const taskPriority = document.querySelector("#taskPriority").value;
    const taskDate = document.querySelector("#taskDate").value;
    const form = document.querySelector("#TaskForm");

    if (taskTitle === "") {
      console.log("error");
    } else {
      // Create new Task Object and push into an array
      const task = new createTask(taskTitle, taskPriority, taskDate);

      // Update UI
      createTaskDiv(task);
      toggleTaskClass();
      form.reset();
      const selectedPage = getSelectedPage();
      console.log(selectedPage);
      if (selectedPage) {
        // If the project doesn't exist, create it with an empty array
        if (!projectTasks[selectedPage]) {
          projectTasks[selectedPage] = [];
        }

        // Update task array within the projectTasks object
        projectTasks[selectedPage].push(task);
        console.log(projectTasks);
      }
    }
  });
}

// Create new project using form
function NewListItem() {
  const buttonAddProject = document.querySelector(".button-add-project");
  buttonAddProject.addEventListener("click", function (e) {
    e.preventDefault();
    const projectTitle = document.querySelector("#form-id").value;
    if (projectTitle == "") {
      console.log("something went wrong");
    } else {
      // Create new Object and push into an Array
      const project = new addNewProject(projectTitle);
      const title = project.title;

      ToggleProjectClass();
      detectProjectClick();

      const projectElement = createProjectDiv(project);
      handleMenuType(title);
    }
  });
}

function createDefaultProjects() {
  const Inbox = document.querySelector("#menuInbox");
  const Today = document.querySelector("#menuToday");
  const NextWeek = document.querySelector("#menuWeek");
  const Important = document.querySelector("#menuImportant");
  const Completed = document.querySelector("#menuCompleted");
  const demoProject = document.querySelector(".demoProject");

  Inbox.addEventListener("click", () => handleMenuType("Inbox"));
  Today.addEventListener("click", () => handleMenuType("Today"));
  NextWeek.addEventListener("click", () => handleMenuType("Next Week"));
  Important.addEventListener("click", () => handleMenuType("Important"));
  Completed.addEventListener("click", () => handleMenuType("Completed"));
  demoProject.addEventListener("click", () => handleMenuType("Demo Project"));
}

// Change project modal visibility
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
// Change task modal visibility
function showTaskModal() {
  const addTaskBtn = document.querySelector(".addTaskBtn");
  addTaskBtn.addEventListener("click", function () {
    setTimeout(() => {
      toggleTaskClass();
      DetectClick();
      newTask();
    });
  });
}

export function handleMenuType(type) {
  resetPage();
  highlightProjects();
  createTaskContainer();
  createItems(type);
  showTaskModal();
}
function highlightProjects() {
  const elements = document.querySelectorAll(".menuEl");
  for (let i = 0; i < elements.length; i++) {
    console.log("Clear event");
    HighlightSidebar();
  }
}
