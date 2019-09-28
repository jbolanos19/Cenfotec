import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, switchMap, timeout } from "rxjs/operators";
import { CONFIG } from 'src/app/config/config.module';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly http: HttpClient) { }

  public getUsers(): Observable<any> {
    const params: HttpParams = this.generateParams({ _page: 1, _limit: 3 });

    return this.http
      .get(`${ CONFIG.api.basePath }/users`)
      .pipe(catchError(this.handleError<any>("getUser")));
  }

  public addUsers(data: any): Observable<any> {
    return this.http
      .post(`${ CONFIG.api.basePath }/users`, data)
      .pipe(catchError(this.handleError<any>("addUser")));
  }

  public deleteUsers(id: number): Observable<any> {
    return this.http
      .delete(`${ CONFIG.api.basePath }/users/${id}`)
      .pipe(catchError(this.handleError<any>("deleteUser")));
  }

  public updateUsers(id: number, data:any): Observable<any> {
    return this.http
      .patch(`${ CONFIG.api.basePath }/users/${id}`, data )
      .pipe(catchError(this.handleError<any>("updateUser")));
  }


  public generateParams(params: any = {}): HttpParams {
    let httpParams: HttpParams = new HttpParams();

    Object.keys(params).forEach(key => {
      const param = params[key];
      if (Array.isArray(param)) {
        param.forEach(value => {
          httpParams = httpParams.append(key, value);
        });
      } else {
        httpParams = httpParams.set(key, param);
      }
    });

    return httpParams;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
