import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs';
import { MongodbTs } from '../mongodb.ts';

@Injectable({
  providedIn: 'root'
})
export class MongoDBApiService {
  private _http: HttpClient;
  private _siteURL = 'http://localhost:5050/';

  constructor(http: HttpClient) { 
    this._http = http;
  }
}
