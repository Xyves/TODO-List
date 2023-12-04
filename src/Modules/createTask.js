import { format, compareAsc } from "date-fns";
class newTask {
  static idCounter = 1;
  constructor(title, priority, date) {
    this.title = title;
    this.priority = priority;
    this.id = newTask.idCounter++;
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
// To be updated
function addTask(title, priority, date, isCompleted) {}
function editTask(title, priority, date) {
  const task = new newTask(title, priority, date);
}

export default newTask;
