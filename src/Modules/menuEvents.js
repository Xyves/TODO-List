import inbox from "./inbox";
import resetPage from "./resetPage";
import today from "./today";
import NextWeek from "./NextWeek";
import Completed from "./Completed";
import Important from "./Important";
import createTask from "./showModalTask";
import DetectClick from "./detectClick";

const menuToday = document.querySelector("#menuToday");
const menuWeek = document.querySelector("#menuWeek");
const menuInbox = document.querySelector("#menuInbox");
const menuImportant = document.querySelector("#menuImportant");
const menuCompleted = document.querySelector("#menuCompleted");

export default function () {
  function addAllEvents() {
    addInbox();
    addToday();
    addWeek();
    addImportant();
    addCompleted();
    addDemoProject();
    addNewTask();
  }
  addAllEvents();

  function addInbox() {
    menuInbox.addEventListener("click", function () {
      resetPage();
      inbox();
      addNewTask();
    });
  }

  function addToday() {
    menuToday.addEventListener("click", function () {
      console.log("1");
      resetPage();
      console.log("0");
      today();
      console.log("2");
      addNewTask();
    });
  }

  function addWeek() {
    menuWeek.addEventListener("click", function () {
      resetPage();
      NextWeek();
      addNewTask();
    });
  }

  function addImportant() {
    menuImportant.addEventListener("click", function () {
      resetPage();
      Important();
      addNewTask();
    });
  }

  function addCompleted() {
    menuCompleted.addEventListener("click", function () {
      resetPage();
      Completed();
      addNewTask();
      console.log("Menu completed");
    });
  }

  function addDemoProject() {
    const demo = document.querySelector(".project > li");
    demo.addEventListener("click", function () {
      resetPage();
      addNewTask();
      demo.classList.add("sidebar-active");
    });
  }
  function addNewTask() {
    const addTaskBtn = document.querySelector(".addTaskBtn");
    addTaskBtn.addEventListener("click", function () {
      setTimeout(() => {
        createTask();
        DetectClick();
      });
    });
  }
}
