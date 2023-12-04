// Not yet made
export default function (object) {
  const task = JSON.parse(window.localStorage.getItem(object));
  localStorage.setItem("Data", JSON.stringify(object));
  console.log(localStorage);
}
