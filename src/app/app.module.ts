import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { FoodApiService } from './services/food-api.service';
import { PagetwoComponent } from './pagetwo/pagetwo.component';

@NgModule({
  declarations: [
    AppComponent,
    PagetwoComponent
  ],
  imports: [
    BrowserModule
  ],
  //providers: [FoodApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
