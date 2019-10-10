import { Component } from "@angular/core";
import { NgClass } from "@angular/common";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Item } from "./item";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Mega To Do List V1.0";
  taskItems = ["make todo list", "make it local", "make it CRUD", "fix bugs"];
  name;
  taskName;
  items;
  formEmpty: boolean;
  ROOT_URL = "http://localhost:3000";

  formConfirmBackground = function() {
    if (this.name.length > 0) {
      //console.log(this.name);
      this.formEmpty = true;
    } else if (this.name.length == 0) {
      this.formEmpty = !true;
    }
  };

  submitNewTask() {
    let taskName = this.name;

    this.taskItems.push(taskName);
    return this.http
      .post(this.ROOT_URL + "/api", { name: taskName })
      .subscribe(data => {
        console.log(data);
      });
  }

  constructor(private http: HttpClient) {}

  getItems() {
    this.items = this.http.get<Item[]>(this.ROOT_URL + "/api");
  }
}
