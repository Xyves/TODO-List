export default function () {
  resetContent();
}
function resetContent() {
  const content = document.querySelector(".content");
  content.innerHTML = "";
  console.log("WIPED!");
}
