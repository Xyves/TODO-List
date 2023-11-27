import { createInbox } from "./Modules/menuEvents";
import resetContent from "./Modules/resetPage";
import addMenuEvents from "./Modules/menuEvents";

document.addEventListener("DOMContentLoaded", function () {
  resetContent();
  addMenuEvents();
  createInbox();
});
