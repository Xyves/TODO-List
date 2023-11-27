export default function () {
  resetContent();
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
//
