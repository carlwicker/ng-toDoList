import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Item } from "./item";

@Injectable({
  providedIn: "root"
})
export class ItemService {
  constructor(private http: HttpClient) {}

  public items;

  // Http Config
  private _url: string = "http://localhost:3000/api";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    })
  };

  // API Call - Get All To Do Items
  getAllListItems() {
    return this.http.get(this._url);
  }

  // Count Number of Items in To Do List.
  countListItems() {}
}
