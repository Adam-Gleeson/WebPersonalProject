import { Injectable } from '@angular/core';

import {HttpClient, HttpErrorResponse} from "@angular/common/http";

import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs';
import { IFoodResponse } from '../pagetwo/foodResponse';

@Injectable({
  providedIn: 'root'
})
export class FoodApiService {
  private _siteURL="https://spoonacular.com/"
  private _key="?apikey=6531601315864b09b604990733326360&t="

  constructor(private _http:HttpClient) { }

  getFoodData(foodName:string):Observable<IFoodResponse> {
    return this._http.get<IFoodResponse>(this._siteURL+ this._key + foodName)
    .pipe(
      tap(data => console.log('Fooddata/error' + JSON.stringify(data))
      ),
      catchError(this.handleError)
    )
  }

  private handleError(err:HttpErrorResponse){
    console.log('FoodApiService' + err.message);
    return throwError(() => new Error("FoodApiService" + err.message))
  }
}
