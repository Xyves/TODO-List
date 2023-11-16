export default function () {
  const content = document.querySelector(".content");
  const mainHeader = document.createElement("h1");
  const menuNextWeek = document.querySelector("#menuWeek");
  menuNextWeek.classList.add("sidebar-active");
  mainHeader.textContent = "Next Week";
  content.appendChild(mainHeader);
  createTask();
  function createTask() {
    const addTaskBtn = document.createElement("div");
    const addTaskText = document.createElement("p");
    const line = document.createElement("div");
    line.classList.add("sidebar-line");
    addTaskBtn.classList.add("addTaskBtn");
    addTaskText.textContent = "Add new Task";
    content.appendChild(addTaskBtn);
    addTaskBtn.appendChild(addTaskText);
    addTaskBtn.appendChild(line);
    console.log("Hey");
  }
}
