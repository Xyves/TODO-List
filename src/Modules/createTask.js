import { format, compareAsc } from "date-fns";
class newTask {
  static idCounter = 1;
  constructor(title, priority, date) {
    this.title = title;
    this.priority = priority;
    this.id = newTask.idCounter++;
    this.date = date;
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

export function createNewTaskDiv(task) {
  const taskContainer = document.querySelector(".taskContainer");
  const taskDiv = document.createElement("div");
  const taskTemplate = document.querySelector("#TodoTaskTemplate");
  const taskId = task.id;
  const date = task.getDate();
  console.log(`I love number ${taskId}`);
  taskDiv.classList.add("task", taskId);
  taskContainer.appendChild(taskDiv);
  taskDiv.append(taskTemplate.content.cloneNode(true));
  taskDiv.querySelector(".toDoTaskName").textContent = task.title;
  taskDiv.querySelector(".toDoTaskDate").textContent = date;
  taskContainer.appendChild(taskDiv);
}
export default newTask;
