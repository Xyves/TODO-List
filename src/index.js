import loadAllFunctions from "./Modules/Events";
import { createInbox } from "./Modules/createMenuItems";
import { loadLocalStorage } from "./Modules/Events";
document.addEventListener("DOMContentLoaded", function () {
  createInbox();
  loadAllFunctions();
});
