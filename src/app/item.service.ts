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
  public itemCount: number = 0;

  // API Config
  private _url: string = "https://carlwicker-item-list.herokuapp.com";

  // API Call - Get All To Do Items
  getAllListItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this._url);
    console.log("works here");
  }

  getItemCount() {
    return this.itemCount;
  }
}
