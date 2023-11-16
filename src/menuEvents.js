import inbox from "./Modules/inbox";
import resetPage from "./Modules/resetPage";
import today from "./Modules/today";
import NextWeek from "./Modules/NextWeek";
import Completed from "./Modules/Completed";
import Important from "./Modules/Important";

export default function () {
  const menuToday = document.querySelector("#menuToday");
  const menuWeek = document.querySelector("#menuWeek");
  const menuInbox = document.querySelector("#menuInbox");
  const menuImportant = document.querySelector("#menuImportant");
  const menuCompleted = document.querySelector("#menuCompleted");
  addInbox();
  addToday();
  addWeek();
  addImportant();
  addCompleted();
  addDemoProject();
  function addInbox() {
    menuInbox.addEventListener("click", async function () {
      await resetPage();
      await inbox();
    });
  }

  function addToday() {
    menuToday.addEventListener("click", async function () {
      console.log("1");
      await resetPage();
      console.log("0");
      await today();
      console.log("2");
    });
  }

  function addWeek() {
    menuWeek.addEventListener("click", function () {
      resetPage();
      NextWeek();
    });
  }

  function addImportant() {
    menuImportant.addEventListener("click", function () {
      resetPage();
      Important();
    });
  }

  function addCompleted() {
    menuCompleted.addEventListener("click", function () {
      resetPage();
      Completed();
      console.log("Menu completed");
    });
  }

  function addTask() {
    const addTask = document.querySelector(".addTaskBtn");
    addTask.addEventListener("click", function () {
      console.log("help");
    });
  }

  function addDemoProject() {
    const demo = document.querySelector(".project > li");
    demo.addEventListener("click", function () {
      resetPage();
      demo.classList.add("sidebar-active");
    });
  }
}
