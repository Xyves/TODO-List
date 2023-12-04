export default function () {
  const content = document.querySelector(".content");
  content.innerHTML = "";
  console.log("WIPED!");
  deleteClass();
}
function deleteClass() {
  const elements = document.querySelectorAll(".menuEl");
  elements.forEach((element) => {
    element.classList.remove("sidebar-active");
  });
}
