import { Injectable } from '@angular/core';
import { DataServiceComponent } from '../data/data.service';
import { environment } from '../../../environments/environments';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class RoleService extends DataServiceComponent {

  private API_ENDPOINT_EXTENSION_GET : String = 'roles';


  constructor(
    private cookiesService: CookieService
  ) {
    super();
  }

  public override getUrlGet(){
    this.url = environment.API_BASE_URL + this.API_ENDPOINT_EXTENSION_GET;
    }
}
