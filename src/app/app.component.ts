import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ItemService } from "./item.service";
import { Item } from "./item";
import { ItemListComponent } from "./item-list/item-list.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public items: Item[];

  constructor(private http: HttpClient, private _itemService: ItemService) {}

  ngOnInit() {
    this._itemService.getAllListItems().subscribe(data => {
      this.items = data;
    });
  }
}
