import { Injectable } from '@angular/core';
import { DataServiceComponent } from '../data/data.service';
import { environment } from '../../../environments/environments';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CourtService extends DataServiceComponent {

  private API_ENDPOINT_EXTENSION_GET_ALL : String = 'tennisCourts';
  private API_ENDPOINT_EXTENSION_GET_BY_ID : String = 'tennisCourt/';
  private API_ENDPOINT_EXTENSION_CREATE : String = 'tennisCourt';

  constructor(private cookiesService: CookieService) {
    super();
  }

  public override getUrlAll(){
    this.url = environment.API_BASE_URL + this.API_ENDPOINT_EXTENSION_GET_ALL;
  }

  public override getUrlGet(){
    this.url = environment.API_BASE_URL + this.API_ENDPOINT_EXTENSION_GET_BY_ID;
  }

  public override getUrlCreate(){
    this.url = environment.API_BASE_URL + this.API_ENDPOINT_EXTENSION_CREATE;
  }

  public getCourts()  {
    this.getUrlAll();
    let token = this.cookiesService.get('token');
    let resp = this.getAll(this.url, token)
    return new Promise((resolve, reject) => {
        resp.subscribe({
            next: (response) => {
                resolve(response);
            },
            error: (err) => {
                alert("Error while getting courts");
                reject(err);
            },
            complete: () => {
                console.log('done');
            }
        });
    });
  }

  public getCourtById(id: string) {
    this.getUrlGet();
    let token = this.cookiesService.get('token');
    let resp = this.getById(this.url, id, token)
    return new Promise((resolve, reject) => {
        resp.subscribe({
            next: (response) => {
                resolve(response);
            },
            error: (err) => {
                alert("Error while getting court");
                reject(err);
            },
            complete: () => {
                console.log('done');
            }
        });
    });
  }

  public createCourt(court: any) {
    this.getUrlCreate();
    let token = this.cookiesService.get('token');
    alert(this.url +'');
    let resp = this.create(this.url, token, court)
    return new Promise((resolve, reject) => {
        resp.subscribe({
            next: (response) => {
                resolve(response);
            },
            error: (err) => {
                alert("Error while creating court");
                reject(err);
            },
            complete: () => {
                console.log('done');
            }
        });
    });
  }
}
