import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

export abstract class DataServiceComponent  {
  loginUrl : string = '';
  url : string = '';

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

  public getUrlGet() {
   }

  public getUrlCreate() { }

  public getUrlDelete() { }

  public getUrlUpdate() { }

  public getUrlAll() { }


  public getAll(url: string, token: string): Observable<any> {
    let tokenStr = 'Bearer ' + token
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this.httpClient.get(url, { headers, responseType: 'json' })
        .pipe((catchError((err: any, caught: Observable<any>) => {
            return throwError(this.generalErrorHandler(err, caught))
        })))
  };

  public delete(url: string, token: string, id: string): Observable<any> {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this.httpClient.delete(url + '/' + id, { headers, responseType: 'json' })
        .pipe((catchError((err: any, caught: Observable<any>) => {
            return throwError(this.generalErrorHandler(err, caught))
        })))
  }

  public create(url: string, token: string, resource: any): Observable<any> {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this.httpClient.post(url, resource, { headers, responseType: 'json' })
        .pipe((catchError((err: any, caught: Observable<any>) => {
            return throwError(this.generalErrorHandler(err, caught))
        })))
  }

  public update(url: string, token: string, resource: any): Observable<any> {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this.httpClient.put(url, resource, { headers, responseType: 'json' })
        .pipe((catchError((err: any, caught: Observable<any>) => {
            return throwError(this.generalErrorHandler(err, caught))
        })))
  }
}