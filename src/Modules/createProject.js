export default function () {








  // Po kliknieciu + wyswietl okno z nazwa projektu, funkcja ktora bedzie tworzyc projekt ma wziac wartosc z tego okna i stworzyc nowy element pod Demo Project
  createNewProject () 

  createTask();
}
  createNewProject(){
    const content = document.querySelector(".content");
    const mainHeader = document.createElement("h1");
    const menuNextWeek = document.querySelector("#menuToday");
    menuNextWeek.classList.add("sidebar-active");
    mainHeader.textContent = "Next Week";
    content.appendChild(mainHeader);
  }
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
