import { Component, OnInit } from "@angular/core";
import { ItemService } from "./../item.service";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-item-edit-form",
  templateUrl: "./item-edit-form.component.html",
  styleUrls: ["./item-edit-form.component.css"]
})
export class ItemEditFormComponent implements OnInit {
  title: string = "Edit Item";
  item: any;
  formInitalValue;
  id;
  name;
  items;

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

  editItemButton() {
    let newItemName = this.name;
    this.http
      .post("/api/" + this.id + "/edit/" + this.formInitalValue, {
        name: newItemName,
        created: Date.now()
      })
      .subscribe(data => {
        // Add Mongoose findOneAndUpdate
      });
  }
}
