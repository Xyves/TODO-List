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
export default newProject;
