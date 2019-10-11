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
  private _url: string = "http://localhost:3000/api";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/x-www-form-urlencoded"
    })
  };

  // API Call - Get All To Do Items
  getAllListItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this._url, {
      headers: this.httpOptions.headers
    });
  }

  // Count Number of Items in To Do List.
  countListItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this._url, {
      headers: this.httpOptions.headers
    });
  }
}
