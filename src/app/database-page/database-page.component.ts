import { Component } from '@angular/core';
import { MongoDBApiService } from '../services/mongo-db-api.service';
import { MongodbTs } from '../mongodb.ts';

@Component({
  selector: 'app-database-page',
  templateUrl: './database-page.component.html',
  styleUrls: ['./database-page.component.css']
})
export class DatabasePageComponent {

  userData: MongodbTs | any;
  _userAPIService;

  constructor(private userAPIService:MongoDBApiService) {
    this._userAPIService = userAPIService;
  }

      //Error Unable to get observables


  /*
  addUserDetails(car:MongodbTs):Observable<any> {
   return this._http.post<MongodbTs>(this._siteURL, car)
   .pipe(
    tap(data => console.log('add user message/error' + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
   }

  private handleError (err:HttpErrorResponse) {
    console.log('CarApiService: ' + err.message);
    return err.message;
  }
*/
}

