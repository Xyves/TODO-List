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

  

