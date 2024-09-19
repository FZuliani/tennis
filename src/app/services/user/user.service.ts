import { Injectable } from '@angular/core';
import { DataServiceComponent } from '../data/data.service';
import { environment } from '../../../environments/environments';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends DataServiceComponent {


  override loginUrl: string = '';
  override url: string = '';

  private API_ENDPOINT_EXTENSION_GET : String = 'user/';
  private API_ENDPOINT_EXTENSION_GET_ALL : String = 'users';
  private API_ENDPOINT_EXTENSION_POST : String = 'user/';
  private API_ENDPOINT_EXTENSION_DELETE : String = 'user/';
  private API_ENDPOINT_EXTENSION_PUT : String = 'user/';

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

    public override getUrlAll(){
      this.url = environment.API_BASE_URL + this.API_ENDPOINT_EXTENSION_GET_ALL;
    }

    public getAllUsers() {
      this.getUrlAll();

      let token = this.cookiesService.get('token');
      let resp = this.getAll(this.url, token)
      return new Promise((resolve, reject) => {
          resp.subscribe({
              next: (response) => {
                  resolve(response);
              },
              error: (err) => {
                  alert("Error while getting users");
                  reject(err);
              },
              complete: () => { console.info('complete'); }
          });
      });
  }

  public updateUser(updateUser: any) : Promise<number> {
    this.getUrlUpdate();

    let token = this.cookiesService.get('token');
    let resp = this.update(this.url + updateUser.id, token, updateUser);
    return new Promise((resolve, reject) => {
        resp.subscribe({
            next: (response) => {
                let idUserTennis = response.id;
                alert("User saved");
                resolve(idUserTennis);
            },
            error: (err) => {
                alert("Error while saving user");
                reject(err);
            },
            complete: () => { console.info('complete'); }
        });
    });
  }

}
