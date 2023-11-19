export function createContent(textContent, selector) {
  const queryName = document.querySelector(`#${selector}`);
  queryName.classList.add("sidebar-active");
  mainHeader.textContent = textContent;
}
export default function () {
  const content = document.querySelector(".content");
  const mainHeader = document.createElement("h1");
  const addTaskBtn = document.createElement("div");
  const addTaskText = document.createElement("p");
  const line = document.createElement("div");
  line.classList.add("sidebar-line");
  addTaskBtn.classList.add("addTaskBtn");
  addTaskText.textContent = "Add new Task";
  content.appendChild(addTaskBtn);
  addTaskBtn.appendChild(addTaskText);
  addTaskBtn.appendChild(line);

  content.appendChild(mainHeader);
  const pages = {
    Inbox: {
      textContent: "Inbox",
      Id: "menuInbox",
    },
    Today: {
      textContent: "Today",
      Id: "menuToday",
    },
    Week: {
      textContent: "Next 7 days",
      Id: "menuWeek",
    },
    Important: {
      textContent: "Important",
      Id: "menuImportant",
    },
    Completed: {
      textContent: "Completed",
      Id: "menuInbox",
    },
  };
}

// function createContent(textContent, selector) {
//   const queryName = document.querySelector(`#${selector}`);
//   queryName.classList.add("sidebar-active");
//   mainHeader.textContent = textContent;
// }
