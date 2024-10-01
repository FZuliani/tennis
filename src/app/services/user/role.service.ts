import { Injectable } from '@angular/core';
import { DataServiceComponent } from '../data/data.service';
import { environment } from '../../../environments/environments';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class RoleService extends DataServiceComponent {

  private API_ENDPOINT_EXTENSION_GET : String = 'roles';
  private API_ENDPOINT_EXTENSION_POST : String = 'role';
  private API_ENDPOINT_EXTENSION_DELETE : String = 'role';
  private API_ENDPOINT_EXTENSION_PUT : String = 'role';


  constructor(
    private cookiesService: CookieService
  ) {
    super();
  }

  public override getUrlGet(){
    this.url = environment.API_BASE_URL + this.API_ENDPOINT_EXTENSION_GET;
    }

    public override getUrlCreate(){
    this.url = environment.API_BASE_URL + this.API_ENDPOINT_EXTENSION_POST;
    }

    public override getUrlDelete(){
      this.url = environment.API_BASE_URL + this.API_ENDPOINT_EXTENSION_DELETE;
    }

    public override getUrlUpdate(){
      this.url = environment.API_BASE_URL + this.API_ENDPOINT_EXTENSION_PUT;
    }
}
