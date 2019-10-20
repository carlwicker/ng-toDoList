import { Component, OnInit } from "@angular/core";
import { ItemService } from "./../item.service";
import { ActivatedRoute, RouterLink, Routes, Router } from "@angular/router";
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
  newItemName;
  data;

  constructor(
    private _itemService: ItemService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    // Get ID Param
    this.id = this.route.snapshot.paramMap.get("id");
    //console.log(this.id);
    // Filter Items to match param
    this._itemService.getItem().subscribe(data => {
      for (var i = 0; i < data.length; i++) {
        let item = data[i];

        if (item._id == this.id) {
          // Set filtered param
          this.formInitalValue = data[i].name;
        }
      }
    });
  }

  editItemButton() {
    let name = this.formInitalValue;
    let id = this.id;

    console.log("ID CHECK: " + id);
    console.log("NAME CHECK: " + name);

    let testString = "/api/" + id + "/edit";
    console.log(testString);

    this.http
      .put("/api/" + this.id + "/edit", {
        // PROBLEM HERE
        name: name,
        _id: id
      })
      .subscribe(data => {});
    this.router.navigate(["/"]);
  }

  // Submit form on keypress
  keyDownEnter() {
    this.editItemButton();
  }
}
