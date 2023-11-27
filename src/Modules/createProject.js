class newProject {
  static idCounter = 1;
  constructor(title) {
    this.title = title;
    this.id = newProject.idCounter++;
  }
  getTitle = () => {
    return this.title;
  };
  getId = () => {
    return this.id;
  };
}
export function createNewProjectDiv(project) {
  const createdProjects = document.querySelector("[data-lists]");
  let elem = document.createElement("div");
  const projectTmpl = document.querySelector("#projectTmpl");

  elem.append(projectTmpl.content.cloneNode(true));
  elem.querySelector(".projectName").textContent = project.title;
  console.log(project.title + "XD");
  createdProjects.appendChild(elem);
}
export default newProject;
