import { NewProject } from "./menuEvents";
class newProject {
  static idCounter = 1;
  constructor(title) {
    this.title = title;
    this.id = newProject.idCounter++;
  }
}
export function createNewProjectDiv(project) {
  const createdProjects = document.querySelector("[data-lists]");
  let elem = document.createElement("div");
  const projectTmpl = document.querySelector("#projectTmpl");
  console.log("hey");
  elem.append(projectTmpl.content.cloneNode(true));
  elem.querySelector(".projectName").textContent = project.title;
  console.log(project.title + "XD");
  // elem.querySelector(".projectId").textContent = project.id;
  createdProjects.appendChild(elem);
}
export default newProject;
