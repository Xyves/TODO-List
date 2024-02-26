import loadAllFunctions, { createDefaultProjects } from "./Modules/Events";
import { createInbox } from "./Modules/createMenuItems";
import { loadLocalStorage } from "./Modules/Events";
import { hideSidebar } from "./Modules/changeVisibility";
document.addEventListener("DOMContentLoaded", function () {
  // createDefaultProjects();
  loadAllFunctions();
  createInbox();
  hideSidebar()
});
