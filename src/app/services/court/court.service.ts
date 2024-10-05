import { Injectable } from '@angular/core';
import { DataServiceComponent } from '../data/data.service';
import { environment } from '../../../environments/environments';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CourtService extends DataServiceComponent {

  private API_ENDPOINT_EXTENSION_GET_ALL : String = 'tennisCourts';

  constructor(private cookiesService: CookieService) {
    super();
  }

  public override getUrlAll(){
    this.url = environment.API_BASE_URL + this.API_ENDPOINT_EXTENSION_GET_ALL;
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
}
