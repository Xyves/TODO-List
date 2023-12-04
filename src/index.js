import addMenuEvents from "./Modules/Events";
import { createInbox } from "./Modules/Events";
document.addEventListener("DOMContentLoaded", function () {
  createInbox();
  addMenuEvents();
});
