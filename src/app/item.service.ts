import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Item } from "./item";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ItemService {
  constructor(private http: HttpClient) {}

  public items;
  public itemCount;

  // API Config
  private _url: string = "https://carlwicker-item-list.herokuapp.com/api/";

  // API Call - Get All To Do Items
  getAllListItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this._url);
  }

  getItemCount() {
    this.getAllListItems().subscribe(data => {
      this.items = data;
      this.itemCount = this.items.length;
    });
  }

  getItem() {}
}
