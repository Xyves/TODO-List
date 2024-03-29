import { format } from "date-fns";
class newTask {
  static idCounter = 0;
  constructor(title, priority, date) {
    this.title = title;
    this.priority = priority;
    this.id = this.constructor.idCounter++;
    this.date = date;
    this.isCompleted = false;
  }
  getTitle = () => {
    return this.title;
  };
  getId = () => {
    return this.id;
  };
  getPriority = () => {
    return this.priority;
  };
  getDate = () => {
    return format(new Date(this.date), "dd/MM/yyyy");
  };
}
// TBA
// function addTask(title, priority, date, isCompleted) {}
// function editTask(title, priority, date) {
//   const task = new newTask(title, priority, date);
// }

export default newTask;
