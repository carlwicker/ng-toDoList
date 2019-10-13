import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HttpHeaders } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { ItemService } from "./item.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule {}
