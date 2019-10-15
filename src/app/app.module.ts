import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HttpHeaders } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { ItemService } from "./item.service";
import { ItemEditFormComponent } from "./item-edit-form/item-edit-form.component";
import { ItemAddFormComponent } from "./item-add-form/item-add-form.component";
import { ItemListComponent } from "./item-list/item-list.component";

@NgModule({
  declarations: [
    AppComponent,
    ItemEditFormComponent,
    ItemAddFormComponent,
    ItemListComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule {}
