import resetPage from "./resetPage";
import createTask from "./showModalTask";
import DetectClick from "./detectClick";
import createItems from "./createMenuItems";

const inbox = document.querySelector("#menuInbox");
const content = document.querySelector(".content");
const mainHeader = document.querySelector(".content h1");

export default function () {
  function addAllEvents() {
    createItems();
    addNewTask();
  }
  const content = document.querySelector(".content");
  const allMenuElements = document.querySelectorAll(".menuEl");
  allMenuElements.forEach((menuElement, index) => {
    menuElement.addEventListener("click", function () {
      resetPage();
      createItems();
      addNewTask();

      const mainHeader = document.querySelector(".content h1");

      // highlight selected menu element
      menuElement.classList.add("sidebar-active");

      mainHeader.textContent = menuElement.textContent;
      content.prepend(mainHeader);
    });
  });

  function addNewTask() {
    const addTaskBtn = document.querySelector(".addTaskBtn");
    addTaskBtn.addEventListener("click", function () {
      setTimeout(() => {
        createTask();
        DetectClick();
      });
    });
  }
  addAllEvents();
}
// Create inbox content od DOM load
export function createInbox() {
  const mainHeader = document.querySelector(".content h1");

  mainHeader.textContent = "Inbox";
  content.prepend(mainHeader);
  inbox.classList.add("sidebar-active");
}

// function addDemoProject() {
//   const demo = document.querySelector(".project > li");
//   demo.addEventListener("click", function () {
//     resetPage();
//     addNewTask();
//     demo.classList.add("sidebar-active");
//   });
// }
