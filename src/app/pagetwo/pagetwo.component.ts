import { Component } from '@angular/core';

import { IFoodResponse } from './foodResponse';
import { FoodApiService } from '../services/food-api.service';
import { Router } from '@angular/router'; //Import for second page

@Component({
  selector: 'app-pagetwo',
  templateUrl: './pagetwo.component.html',
  styleUrls: ['./pagetwo.component.css']
})
export class PagetwoComponent {

  
  foodData:IFoodResponse | undefined;
  errorMessage:any;

  constructor(private _foodService:FoodApiService){ }

  getFoodDetails(foodName:string): boolean {
    this._foodService.getFoodData(foodName).subscribe(
      foodData => {
        this.foodData=foodData;
        console.log("Recipes : " + this.foodData.recipes);
      }
    )
      return false;
    }



}
