// Add class to a project element onclick
export default function () {
  const content = document.querySelector(".content");
  const allMenuElements = document.querySelectorAll(".menuEl");

  allMenuElements.forEach((menuElement) => {
    menuElement.addEventListener("click", function () {
      removeSidebar();
      setTimeout(() => {
        const mainHeader = document.querySelector(".content h1");
        menuElement.classList.add("sidebar-active");
        content.prepend(mainHeader);
      }, 0);
    });
  });
}
function removeSidebar() {
  const allMenuElements = document.querySelectorAll(".menuEl");
  allMenuElements.forEach((el) => el.classList.remove("sidebar-active"));
}
