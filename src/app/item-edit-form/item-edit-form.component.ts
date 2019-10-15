import { Component, OnInit } from "@angular/core";
import { ItemService } from "./../item.service";
import { ActivatedRoute } from "@angular/router";
import { Item } from "./../item";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-item-edit-form",
  templateUrl: "./item-edit-form.component.html",
  styleUrls: ["./item-edit-form.component.css"]
})
export class ItemEditFormComponent implements OnInit {
  title: string = "Edit Item";
  items: any;
  item: any;
  formInitalValue: any;
  id;

  constructor(
    private _itemService: ItemService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id);
    this._itemService.getItem().subscribe(data => {
      for (var i = 0; i < data.length; i++) {
        let item = data[i];

        if (item._id == this.id) {
          this.formInitalValue = data[i].name;
        }
      }
    });
  }

  get() {}
}
