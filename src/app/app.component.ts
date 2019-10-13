import { Component, OnInit, OnChanges } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ItemService } from "./item.service";
import { Item } from "./item";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnChanges {
  title = "Add Item";
  subTitle: string = "Learning Angular";
  name: string = "";
  newItemName;
  created: Date;
  public items;
  public itemCount;
  formEmpty: Boolean = !true;
  ROOT_URL = "http://localhost:3000";

  constructor(private http: HttpClient, private _itemService: ItemService) {}

  ngOnInit() {
    // API - Get all list items.
    this.items = this._itemService.getAllListItems();
  }

  // Form confirm background colour switch.
  formConfirmBackground = function() {
    if (this.name == "") {
      this.formEmpty = !true;
    } else {
      this.formEmpty = true;
    }
  };

  // Form submit data to array.
  submitNewTask() {
    let newItemName = this.name;
    this.http
      .post("/api", { name: newItemName, created: Date.now() })
      .subscribe(data => {
        // console.log(data);
        this.items = this._itemService.getAllListItems();
        this.name = "";
        this.formEmpty = !true;
      });
  }

  ngOnChanges() {
    this.items = this._itemService.getAllListItems();
  }
}
