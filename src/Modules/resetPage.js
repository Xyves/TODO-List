export default function () {
  resetContent();
  const menuToday = document.querySelector("#menuToday");
  const menuWeek = document.querySelector("#menuWeek");
  const menuInbox = document.querySelector("#menuInbox");
  const menuImportant = document.querySelector("#menuImportant");
  const menuCompleted = document.querySelector("#menuCompleted");

  function resetContent() {
    const content = document.querySelector(".content");
    content.innerHTML = "";
    console.log("WIPED!");
    const elements = document.querySelectorAll(".menuEl");
    elements.forEach((element) => {
      element.classList.remove("sidebar-active");
    });
  }
}
