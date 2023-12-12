import {
  createTaskDiv,
  createProjectDiv,
  createTaskContainer,
  createNewProject,
  updateHeaderFromSidebar,
  setProjectOption,
} from "./createMenuItems";
import resetPage from "./resetPage";
import createTask from "./createTask";
import {
  ToggleProjectClass,
  toggleTaskClass,
  detectProjectClick,
  showProjectModal,
  showTaskModal,
} from "./changeVisibility";
import addNewProject from "./createProject";
import HighlightSidebar from "./menuHighlight";
import { format, getWeek } from "date-fns";
// Functions when loading the page
export default function loadAllFunctions() {
  setLocalStorage();
  loadLocalProjects();
  createProject();
  showProjectModal();
  showTaskModal();
  createDefaultProjects();
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
function setLocalStorage() {
  if (window.localStorage.length === 0) {
    localStorage.setItem("projectTasks", JSON.stringify(projectTasks));
  }
}
export function loadLocalStorageTask(title) {
  // const titleEl = document.querySelector(".sidebar-active a");
  // const textContent = titleEl.textContent;
  // console.log(textContent + "????");
  // const title = text ? text.textContent.trim() : null;

  const userInfo = localStorage.getItem("projectTasks");
  const userInfoParsed = JSON.parse(userInfo);

  console.log(userInfoParsed);
  console.log("Trying to load task");
  if (userInfoParsed && title !== null && userInfoParsed[title]) {
    const tasksForProject = userInfoParsed[title];
    console.log(`Tasks for project '${title}':`, tasksForProject);

    tasksForProject.forEach((task) => {
      createTaskDiv(task);
      console.log("Logged task:", task);
    });
  } else {
    console.log(
      `No tasks found for project '${title}' or tasks is not an array.`
    );
  }
}

export function loadInboxLocalStorage() {
  const selectedElement =
    document.querySelector(".sidebar-active a").textContent;
  console.log(selectedElement);

  const userInfo = localStorage.getItem("projectTasks");
  const userInfoParsed = JSON.parse(userInfo);
  if (userInfoParsed && userInfoParsed.hasOwnProperty(selectedElement)) {
    console.log("Beep");
    loadLocalStorageTask();
  }
}
// Add new task
export function setTask() {
  const buttonAdd = document.querySelector(".button-add");
  buttonAdd.addEventListener("click", function (e) {
    const taskTitle = document.querySelector("#taskTitle").value;
    const taskPriority = document.querySelector("#taskPriority").value;
    let taskFormDate = document.querySelector("#taskDate").value;
    const selectedProject = document.querySelector("#selectProject").value;
    const form = document.querySelector("#TaskForm");
    e.preventDefault();
    if (!taskTitle && !selectedProject) {
      console.log("error 2");
    } else {
      let taskDate;
      if (!taskFormDate) {
        taskDate = format(new Date(), "dd/MM/yyyy");
      } else {
        taskDate = taskFormDate;
      }
      // Create new Task Object
      const task = new createTask(taskTitle, taskPriority, taskDate);
      const userInfo = localStorage.getItem("projectTasks");

      //
      const userInfoParsed = JSON.parse(userInfo);
      userInfoParsed.Inbox.push(task);
      if (!userInfoParsed[selectedProject]) {
        userInfoParsed[selectedProject] = [];
      }
      const currentActiveProjectElement =
        document.querySelector(".sidebar-active");
      const currentActiveProject = currentActiveProjectElement
        ? currentActiveProjectElement.textContent.trim()
        : null;
      console.log("current active project is:" + currentActiveProject);
      console.log("current selected" + selectedProject);
      if (currentActiveProject === selectedProject) {
        createTaskDiv(task);
        console.log("Task created!");
      }

      userInfoParsed[selectedProject].push(task);

      // Update UI
      toggleTaskClass();

      const currentDate = format(new Date(), "dd/MM/yyyy");
      const currentDateWeek = getWeek(new Date());
      const parsedDate = Date.parse(taskDate);
      const setDateWeek = getWeek(parsedDate);
      if (currentDate == taskDate) {
        userInfoParsed.Today.push(task);
      }
      if (taskPriority == "priorityHigh") {
        userInfoParsed.Important.push(task);
      }
      if (task.isCompleted == true) {
        userInfoParsed.Completed.push(task);
      }
      if (currentDateWeek + 1 == setDateWeek) {
        userInfoParsed["Next Week"].push(task);
      }
      form.reset();

      // Save projectTasks to localStorage
      localStorage.setItem("projectTasks", JSON.stringify(userInfoParsed));
    }
  });
}
function isProjectTitleUnique(newProjectTitle) {
  const projectElements = document.querySelectorAll(".menuElement li");
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
  if (userInfoParsed) {
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
  createTaskContainer(type);
  updateHeaderFromSidebar(type);
  HighlightSidebar();
  showTaskModal();
  loadLocalStorageTask(type);
}

// Create new project using form
function createProject() {
  const buttonAddProject = document.querySelector(".button-add-project");
  console.log(buttonAddProject);
  buttonAddProject.addEventListener("click", function (e) {
    const projectTitleInput = document.querySelector("#form-id");
    const projectTitle = projectTitleInput.value.trim();
    e.preventDefault();

    if (!isProjectTitleUnique(projectTitle)) {
      console.log("Project title is not unique");
    } else {
      // Create new Object
      const project = new addNewProject(projectTitle);
      const title = project.title;

      resetPage();
      createTaskContainer();
      createProjectDiv(project);
      updateHeaderFromSidebar(title);
      ToggleProjectClass();
      detectProjectClick();
      setProjectOption(title);

      showTaskModal();

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

export function createDefaultProjects() {
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
export function handleMenuDefaultType(text) {
  resetPage();
  createTaskContainer();
  HighlightSidebar();
  updateHeaderFromSidebar(text);
  showTaskModal();
  console.log("monka");
  loadLocalStorageTask(text);
  setTask();
}
