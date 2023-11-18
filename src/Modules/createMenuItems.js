export function addItems() {
  const items = ["Inbox", "Today", "NextWeek", "Important", "Completed"];
  selectMenuItems(items)
  function selectMenuItems(items){
    return items.map()
    }
  }
  items.forEach(textContent,ClassName,items){
    const content = document.querySelector(".content");
    const mainHeader = document.createElement("h1");
    const menuItem = document.querySelector(`#${menu}+${items}`);
    menuItem.classList.add("sidebar-active");
    mainHeader.textContent = "Important";
    content.appendChild(mainHeader);
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

