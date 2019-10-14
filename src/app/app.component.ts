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
  public items = [];
  public itemCount;

  constructor(private http: HttpClient, private _itemService: ItemService) {}

  ngOnInit() {
    // API - Get all list items.
    this._itemService.getAllListItems().subscribe(data => {
      this.items = data;
      this.itemCount = this.items.length;
      console.log(this.itemCount);
    });
  }
}
