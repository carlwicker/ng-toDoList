import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-item-edit-form",
  templateUrl: "./item-edit-form.component.html",
  styleUrls: ["./item-edit-form.component.css"]
})
export class ItemEditFormComponent implements OnInit {
  title: string = "Edit Item";

  constructor() {}

  ngOnInit() {}
}
