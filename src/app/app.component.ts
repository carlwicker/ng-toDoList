import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Mega To Do List V1.0";
  taskItems = ["make todo list", "make it local", "make it CRUD", "fix bugs"];
  name: string = "";

  submitNewTask() {
    var taskName = this.name;
    this.taskItems.push(taskName);
  }
}
