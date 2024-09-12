import { Injectable } from '@angular/core';
import { DataServiceComponent } from '../data/data.service';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends DataServiceComponent {

  private API_ENDPOINT_EXTENSION_LOGIN = 'signin';
  constructor() {
    super();
   }

  public override getLoginUrl() {

    this.loginUrl = environment.API_BASE_URL + this.API_ENDPOINT_EXTENSION_LOGIN;
    }


    public checkCredentials(credentials: any, showMessage: boolean) {
      
      this.getLoginUrl();
      debugger;
      let resp = this.getLogin(this.loginUrl, credentials);
      resp.subscribe({
        next: (response) =>{
          let result = response;
          if(result){
            let fieldValues = JSON.parse(result);
            let keys = Object.keys(fieldValues);
            let values = Object.values(fieldValues);
            if (keys[0] == 'jwtToken'){
              //localStorage.setItem('loggedIn', 'logged');
             // this.cookiesService.set('token', values[0]);
            }
          }
        }
      })
    }
}
