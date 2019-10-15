import { Component, OnInit } from "@angular/core";
import { ItemService } from "./../item.service";

@Component({
  selector: "app-item-edit-form",
  templateUrl: "./item-edit-form.component.html",
  styleUrls: ["./item-edit-form.component.css"]
})
export class ItemEditFormComponent implements OnInit {
  title: string = "Edit Item";
  item: any;
  id: string;

  constructor(private _itemService: ItemService) {}

  ngOnInit() {}
}
