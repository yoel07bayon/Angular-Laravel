import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../environments/environment';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PeriodosService {

  httpHeaders = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    })
  };

  endPoint = 'listaPeriodos/';

  constructor(private httpClient: HttpClient) {

  }

  httpError(error) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      msg = error.error.message;
    } else {
      msg = `Error Code: ${error.status}`;
    }
    return throwError(msg);
  }


  public getPeriodos(): Observable<any> {
    return this.httpClient.get<any>(`${environment.url}${this.endPoint}`, this.httpHeaders)
      .pipe(retry(1),
        catchError(this.httpError));
  }



}
