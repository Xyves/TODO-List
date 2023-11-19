import { createInbox } from "./Modules/menuEvents";
import resetContent from "./Modules/resetPage";
import addMenuEvents from "./Modules/menuEvents";
// import nextWeek from "./NextWeek";
// import today from "./today";
// import Completed from "./Completed";
document.addEventListener("DOMContentLoaded", function () {
  resetContent();
  addMenuEvents();
  createInbox();
});
