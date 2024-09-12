import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

export abstract class DataServiceComponent  {
  loginUrl : string = '';


  constructor() { }

  private readonly httpClient = inject(HttpClient);

  getLoginUrl() { }
  



  public getLogin(url : string, resource: any): Observable<any> {
    return this.httpClient.post(url, resource, {responseType: 'test' as 'json'})
    .pipe((catchError((error: any, caught: Observable<any>) => {
      return throwError(this.generalErrorHandler(error, caught));
    })));
  }

  public generalErrorHandler(error: any, caught: Observable<any>): Observable<any> {
    console.log('An error occurred', error);
    return throwError(error);
  }
}