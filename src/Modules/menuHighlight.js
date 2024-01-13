// Add class to a project element onclick
export default function HighlightSidebar() {
  const allDefaultMenuElements = document.querySelectorAll(".menuElement");

  allDefaultMenuElements.forEach((menuElement) => {
    menuElement.addEventListener("click", function () {
      menuElement.classList.add("sidebar-active");
    });
  });
}
