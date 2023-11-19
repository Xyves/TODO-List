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
  // mainHeader.textContent = "?";
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

//   for (const page in pages) {
//     if (pages.hasOwnProperty(page)) {
//       console.log(page);
//     }
//   }
//   function createTask() {
//     const menuItem = document.querySelectorAll(".menuEl");
//     menuItem.forEach(
//       addEventListener("click", function () {
//         const addTaskBtn = document.createElement("div");
//         const addTaskText = document.createElement("p");
//         const line = document.createElement("div");
//         line.classList.add("sidebar-line");
//         addTaskBtn.classList.add("addTaskBtn");
//         addTaskText.textContent = "Add new Task";
//         content.appendChild(addTaskBtn);
//         addTaskBtn.appendChild(addTaskText);
//         addTaskBtn.appendChild(line);
//       })
//     );
//   }
//   createTaskTemplate;

//   for (let i = 0; i < items.length; i++) {
//     console.log(items[i]);
//     const currentItem = document.querySelector(`"#menu" + ${items[i]}`);
//     mainHeader.textContent = items[i];
//     currentItem.classList.add("sidebar-active");
//     content.appendChild(mainHeader);
//   }
//   createTemplate();
// }

// // items.forEach(textContent,ClassName,items){

// //   const addTaskBtn = document.createElement("div");
// //   const addTaskText = document.createElement("p");
// //   const line = document.createElement("div");
// //   line.classList.add("sidebar-line");
// //   addTaskBtn.classList.add("addTaskBtn");
// //   addTaskText.textContent = "Add new Task";
// //   content.appendChild(addTaskBtn);
// //   addTaskBtn.appendChild(addTaskText);
// //   addTaskBtn.appendChild(line);
// //   console.log("Hey");
// // }
// // }
