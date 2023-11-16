import inbox from "./Modules/inbox";
import resetContent from "./Modules/resetPage";
import addMenuEvents from "./menuEvents";
// import nextWeek from "./NextWeek";
// import today from "./today";
// import Completed from "./Completed";
document.addEventListener("DOMContentLoaded", function () {
  resetContent();
  inbox();
  addMenuEvents();
});
