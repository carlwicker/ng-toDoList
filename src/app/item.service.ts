import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ItemService {
  constructor() {}
}

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded"
  })
};
