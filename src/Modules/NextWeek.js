export default function () {
  const content = document.querySelector(".content");
  const mainHeader = document.createElement("h1");
  const menuNextWeek = document.querySelector("#menuWeek");

  menuNextWeek.classList.add("sidebar-active");
  mainHeader.textContent = "Next Week";

  content.appendChild(mainHeader);
  createTask();
  function createTask() {}
}
