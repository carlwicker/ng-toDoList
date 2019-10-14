import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ItemService } from "./../item.service";
import { Item } from "./../item";

@Component({
  selector: "app-add-item-form",
  templateUrl: "./add-item-form.component.html",
  styleUrls: ["./add-item-form.component.css"]
})
export class AddItemFormComponent implements OnInit {
  constructor(private http: HttpClient, private _itemService: ItemService) {}

  title = "Add Item";
  subTitle: string = "Learning Angular";
  name: string = "";
  newItemName;
  created: Date;

  formEmpty: Boolean = !true;

  public items;
  public itemCount;

  ngOnInit() {
    // API - Get all list items.
    this.items = this._itemService.getAllListItems();
    this.itemCount = this._itemService.getItemCount();
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
        this.items = this._itemService.getAllListItems();
        this.name = "";
        this.formEmpty = !true;
      });
  }
}
