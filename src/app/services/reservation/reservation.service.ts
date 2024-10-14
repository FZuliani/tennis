import { Injectable } from '@angular/core';
import { DataServiceComponent } from '../data/data.service';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../environments/environments';
import { ReservationElement } from '../../screens/reservation/reservation/reservation.component';

@Injectable({
  providedIn: 'root'
})
export class ReservationService extends DataServiceComponent {
  

  private API_ENDPOINT_EXTENSION_RESERVE = 'reservation';
  private API_ENDPOINT_EXTENSION_GET_BY_DATE_ID = 'reservation/date/';

  constructor(
    private cookiesService: CookieService
  ) {
    super();
   }

  public override getUrlCreate(){
    this.url = environment.API_BASE_URL + this.API_ENDPOINT_EXTENSION_RESERVE;
  }

  public override getUrlGet(){
    this.url = environment.API_BASE_URL + this.API_ENDPOINT_EXTENSION_GET_BY_DATE_ID;
  }

  public reserveCourt(reservation: ReservationElement) : Promise<boolean> {
    this.getUrlCreate();
    reservation.id = this.generateUniqueId();
    let token = this.cookiesService.get('token');
    let resp = this.create(this.url, token, reservation)
    return new Promise((resolve, reject) => {
      resp.subscribe({
        next: (response) => {
          if (response.status === 409) {
            reject(new Error('Conflict: Reservation already exists.'));
          } else {
            resolve(response);
          }
        },
        error: (err) => {
          reject(err);
        },
      });
    });
  }
  generateUniqueId(): number {
    return Math.floor(Math.random() * Date.now());
  }

}
