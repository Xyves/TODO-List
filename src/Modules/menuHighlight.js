// Add class to a project element onclick
export default function HighlightSidebar() {
  const content = document.querySelector(".content");
  const allDefaultMenuElements = document.querySelectorAll(".menuElement");

  allDefaultMenuElements.forEach((menuElement) => {
    menuElement.addEventListener("click", function () {
      setTimeout(() => {
        const mainHeader = document.querySelector(".content h1");

        menuElement.classList.add("sidebar-active");
        content.prepend(mainHeader);
      }, 0);
    });
  });
}
export function getSelectedPage() {
  const selectedElement = document.querySelector(".sidebar-active");
  if (selectedElement) {
    console.log(selectedElement.textContent.trim());
    return selectedElement.textContent.trim();
  }
}
export function highlightAllProjects() {
  const elements = document.querySelectorAll(".menuEl");
  for (let i = 0; i < elements.length; i++) {
    HighlightSidebar();
  }
}
