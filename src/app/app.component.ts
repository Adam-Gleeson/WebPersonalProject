import { Component } from '@angular/core';
import { IFoodResponse } from './foodResponse';
import { FoodApiService } from './services/food-api.service';
import { Router } from '@angular/router'; //Import for second page

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webPersonalProject';
  foodData:IFoodResponse | undefined;
  errorMessage:any;

  constructor(private _foodService:FoodApiService, private router:Router){ }

  getFoodDetails(foodName:string): boolean {
    this._foodService.getFoodData(foodName).subscribe(
      foodData => {
        this.foodData=foodData;
        console.log("Recipes : " + this.foodData.recipes);
      }
    )
      return false;
    }

//method for navigating to second page
    goToPage(pageName:string):void{
      this.router.navigate([`${pageName}`]);
  }

  }
  
  

