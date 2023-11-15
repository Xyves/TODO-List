import inbox from "./inbox";
import resetPage from "./resetPage";
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

  function addInbox() {
    menuInbox.addEventListener("click", async function () {
      await resetPage();
      await inbox();
    });
  }
  function addToday() {
    menuToday.addEventListener("click", function () {
      resetPage();
    });
  }
  function addWeek() {
    menuWeek.addEventListener("click", function () {
      console.log("Week help");
    });
  }
  function addImportant() {
    menuImportant.addEventListener("click", function () {
      console.log("Important!");
    });
  }
  function addCompleted() {
    menuCompleted.addEventListener("click", function () {
      console.log("Menu completed");
    });
  }
  function addTask() {
    const addTask = document.querySelector(".addTaskBtn");
    addTask.addEventListener("click", function () {
      console.log("help");
    });
  }
}
