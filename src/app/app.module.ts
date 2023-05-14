import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FoodApiService } from './services/food-api.service';
import { PagetwoComponent } from './pagetwo/pagetwo.component';
import { RouterModule, Routes } from '@angular/router';
import { DatabasePageComponent } from './database-page/database-page.component';

const routes:Routes=[
  {path:'pagetwo', component:PagetwoComponent}, //API Page
  {path:'database-page', component:DatabasePageComponent} //DataBasePage
]

@NgModule({
  declarations: [
    AppComponent,
    PagetwoComponent,
    DatabasePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FoodApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
