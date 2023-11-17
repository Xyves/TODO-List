export default function () {
  window.addEventListener("click", function (e) {
    const modalBox = document.querySelector(".modal-box");
    if (modalBox.contains(e.target)) {
      console.log("You clicked inside!");
    } else {
      modalBox.classList.add("none");
      modalBox.classList.remove("visible");
    }
  });
}
