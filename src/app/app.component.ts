import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ItemService } from "./item.service";
import { Item } from "./item";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Add Item";
  subTitle: string = "Learning Angular";
  name: string = "";
  newItemName;
  public items;
  public itemCount;
  formEmpty: boolean;
  ROOT_URL = "http://localhost:3000";

  constructor(private http: HttpClient, private _itemService: ItemService) {}

  ngOnInit() {
    // API - Get all list items.

    this.items = this._itemService.getAllListItems();
    this.itemCount = this._itemService.getItemCount();
  }

  // Form confirm background colour switch.
  formConfirmBackground = function() {
    if (this.name.length > 0) {
      this.formEmpty = true;
    } else if (this.name.length <= 0) {
      this.formEmpty = !true;
    }
  };

  // Form submit data to array.
  submitNewTask() {
    let newItemName = this.name;

    this.http
      .post(this.ROOT_URL + "/api", { name: newItemName })
      .subscribe(data => {
        //console.log(data);
        this.items = this._itemService.getAllListItems();
      });

    this.name = "";
    this.formEmpty = !true;
    this.itemCount++;
  }
}
