import {
  createItemsDiv,
  createTaskDiv,
  createProjectDiv,
  createTaskContainer,
  createNewProject,
  createProjectHeader,
  setProjectOption,
} from "./createMenuItems";
import resetPage from "./resetPage";
import createTask from "./createTask";
import {
  ToggleProjectClass,
  toggleTaskClass,
  detectProjectClick,
  detectTaskClick,
} from "./changeVisibility";
import addNewProject from "./createProject";
import HighlightSidebar, {
  highlightAllProjects,
  getSelectedPage,
} from "./menuHighlight";
import { format, getWeek } from "date-fns";
// Functions when loading the page
export default function loadAllFunctions() {
  NewListItem();
  showProjectModal();
  showTaskModal();
  createDefaultProjects();
  loadLocalProjects();
  loadInboxLocalStorage();
  loadLocalStorageTask();
  HighlightSidebar();
}

const projectTasks = {
  Inbox: [],
  Today: [],
  "Next Week": [],
  Important: [],
  Completed: [],
  "Demo Project": [],
};
export function loadLocalStorageTask(title) {
  const userInfo = localStorage.getItem("projectTasks");
  const userInfoParsed = JSON.parse(userInfo);
  let tasksForProject = userInfoParsed[title];

  if (userInfoParsed && userInfoParsed[title]) {
    tasksForProject.forEach((task) => {
      createTaskDiv(task);
    });
  }
}

function loadInboxLocalStorage() {
  const selectedElement =
    document.querySelector(".sidebar-active a").textContent;
  console.log(selectedElement);

  const userInfo = localStorage.getItem("projectTasks");
  const userInfoParsed = JSON.parse(userInfo);

  if (userInfoParsed && userInfoParsed.hasOwnProperty("Inbox")) {
    loadLocalStorageTask("Inbox");
  }
}
// Add new task
function setTask() {
  const buttonAdd = document.querySelector(".button-add");
  buttonAdd.addEventListener("click", function (e) {
    e.preventDefault();

    const taskTitle = document.querySelector("#taskTitle").value;
    const taskPriority = document.querySelector("#taskPriority").value;
    let taskFormDate = document.querySelector("#taskDate").value;
    const form = document.querySelector("#TaskForm");
    const selectedProject = document.querySelector("#selectProject").value;
    console.log(selectedProject);

    if (taskTitle == "" || taskPriority == "" || selectedProject == "") {
      console.log("error");
      return false;
    } else {
      let taskDate;
      if (!taskFormDate) {
        taskDate = format(new Date(), "dd/MM/yyyy");
      } else {
        taskDate = taskFormDate;
      }
      // Create new Task Object
      const task = new createTask(taskTitle, taskPriority, taskDate);
      projectTasks.Inbox.push(task);
      const userInfo = localStorage.getItem("projectTasks");
      const userInfoParsed = JSON.parse(userInfo);
      // if (!userInfoParsed[selectedProject]) {
      //   userInfoParsed[selectedProject] = [];
      //   console.log(
      //     `Created a new array for the project '${selectedProject}'.`
      //   );
      // }
      // Update UI
      createTaskDiv(task);
      toggleTaskClass();
      userInfoParsed[selectedProject].push(task);
      form.reset();

      const currentDate = format(new Date(), "dd/MM/yyyy");
      const currentDateWeek = getWeek(new Date());
      const parsedDate = Date.parse(taskDate);
      const setDateWeek = getWeek(parsedDate);
      if (currentDate == taskDate) {
        projectTasks.Today.push(task);
      }
      if (taskPriority == "priorityHigh") {
        projectTasks.Important.push(task);
      }
      if (task.isCompleted == true) {
        projectTasks.Completed.push(task);
      }
      if (currentDateWeek + 1 == setDateWeek) {
        projectTasks["Next Week"].push(task);
      }
      // Save projectTasks to localStorage
      localStorage.setItem("projectTasks", JSON.stringify(projectTasks));
    }
  });
}
function isProjectTitleUnique(newProjectTitle) {
  const projectElements = document.querySelectorAll(".menuElement");
  const mainProjects = document.querySelectorAll(".menuEl a");
  const uniqueTitle = document.querySelector("#uniqueTitle");

  for (const element of projectElements) {
    if (element.textContent == newProjectTitle) {
      // Project with the same title already exists
      uniqueTitle.textContent = "Change title to something unique";
      return false;
    }
  }
  for (const element of mainProjects) {
    if (element.textContent === newProjectTitle) {
      uniqueTitle.textContent = "Change title to something unique";
      return false;
    }
  }
  return true;
}
function loadLocalProjects() {
  const excludedKeys = [
    "Inbox",
    "Today",
    "Important",
    "Next Week",
    "Completed",
    "Demo Project",
  ];
  const userInfo = localStorage.getItem("projectTasks");
  const userInfoParsed = JSON.parse(userInfo);
  if (userInfo) {
    Object.keys(userInfoParsed).forEach((key) => {
      if (!excludedKeys.includes(key)) {
        // Create a new project with the key (project name)
        createNewProject({ name: key });
        setProjectOption(key);
      }
    });
    return;
  }
}

export function handleMenu(type) {
  resetPage();
  createTaskContainer();
  createItemsDiv(type);
  showTaskModal();
  loadLocalStorageTask(type);
  NewListItem();
}
// Create new project using form
function NewListItem() {
  const buttonAddProject = document.querySelector(".button-add-project");
  buttonAddProject.addEventListener("click", function (e) {
    const projectTitleInput = document.querySelector("#form-id");
    const projectTitle = projectTitleInput.value.trim();
    console.log(projectTitle);
    e.preventDefault();

    if (projectTitle == "") {
      console.log("Something went wrong");
      return false;
    } else if (!isProjectTitleUnique(projectTitle)) {
      console.log("Project title is not unique");
    } else {
      // Create new Object
      const project = new addNewProject(projectTitle);
      const title = project.title;

      ToggleProjectClass();
      detectProjectClick();
      createProjectDiv(project);
      setProjectOption(title);
      createItemsDiv(title);

      // showTaskModal();
      const storedProjectTasksString = localStorage.getItem("projectTasks");
      const storedProjectTasks = storedProjectTasksString
        ? JSON.parse(storedProjectTasksString)
        : {};

      if (!storedProjectTasks.hasOwnProperty(projectTitle)) {
        storedProjectTasks[projectTitle] = [];
      }
      localStorage.setItem("projectTasks", JSON.stringify(storedProjectTasks));
    }
  });
}
export function handleMenuDefaultType(type) {
  resetPage();
  highlightAllProjects();
  createTaskContainer();
  createItemsDiv(type);
  // showTaskModal();
  // NewListItem();
  loadLocalStorageTask(type);
}

function createDefaultProjects() {
  const Inbox = document.querySelector("#menuInbox");
  const Today = document.querySelector("#menuToday");
  const NextWeek = document.querySelector("#menuWeek");
  const Important = document.querySelector("#menuImportant");
  const Completed = document.querySelector("#menuCompleted");
  const demoProject = document.querySelector(".demoProject");

  Inbox.addEventListener("click", () => handleMenuDefaultType("Inbox"));
  Today.addEventListener("click", () => handleMenuDefaultType("Today"));
  NextWeek.addEventListener("click", () => handleMenuDefaultType("Next Week"));
  Important.addEventListener("click", () => handleMenuDefaultType("Important"));
  Completed.addEventListener("click", () => handleMenuDefaultType("Completed"));
  demoProject.addEventListener("click", () =>
    handleMenuDefaultType("Demo Project")
  );
}
// NewListItem()
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
  if (addTaskBtn) {
    addTaskBtn.addEventListener("click", function () {
      setTimeout(() => {
        toggleTaskClass();
        detectTaskClick();
        setTask();
      });
    });
  }
}
