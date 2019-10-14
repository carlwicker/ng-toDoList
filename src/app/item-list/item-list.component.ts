import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ItemService } from "./../item.service";
import { Item } from "./../item";
import { Observable } from "rxjs";

@Component({
  selector: "app-item-list",
  templateUrl: "./item-list.component.html",
  styleUrls: ["./item-list.component.css"]
})
export class ItemListComponent implements OnInit {
  constructor(private _itemService: ItemService) {}

  public items;
  public itemCount: number;

  ngOnInit() {
    // API - Get all list items.
    this._itemService.getAllListItems().subscribe(data => {
      this.items = data;
      this.itemCount = this.items.length;
    });
  }

  getAllItems() {
    this._itemService.getAllListItems().subscribe(data => {
      this.items = data;
    });
  }
}
