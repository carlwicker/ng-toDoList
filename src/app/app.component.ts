import { Component, OnInit } from "@angular/core";
import { NgClass } from "@angular/common";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ItemService } from "./item.service";
import { ConsoleReporter } from "jasmine";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Mega To Do List V1.0";
  name: string = "";
  newTaskName;
  public items: Object;
  itemCount: number = 0;
  formEmpty: boolean;
  ROOT_URL = "http://localhost:3000";

  constructor(private http: HttpClient, private _itemService: ItemService) {}

  ngOnInit() {
    // API - Get all list items.
    this.items = this._itemService.getAllListItems();
  }

  // Form confirm background colour switch.
  formConfirmBackground = function() {
    if (this.name.length > 0) {
      this.formEmpty = true;
    } else if (this.name.length == 0) {
      this.formEmpty = !true;
    }
  };

  // Form submit data to array.
  submitNewTask() {
    let newTaskName = this.name;

    this.http
      .post(this.ROOT_URL + "/api", { name: newTaskName })
      .subscribe(data => {
        console.log(data);
        //console.log(this.items);
      });
    this.name = "";
    this.formEmpty = !true;
    this.itemCount++;
  }
}
