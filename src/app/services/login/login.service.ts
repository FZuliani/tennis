import { Injectable } from '@angular/core';
import { DataServiceComponent } from '../data/data.service';
import { environment } from '../../../environments/environments';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends DataServiceComponent {

  private API_ENDPOINT_EXTENSION_LOGIN = 'signin';
  constructor(
    private cookiesService: CookieService
  ) {
    super();
   }

  public override getLoginUrl() {
    this.loginUrl = environment.API_BASE_URL + this.API_ENDPOINT_EXTENSION_LOGIN;
  }


  public checkCredentials(credentials: any, showMessage: boolean){
    this.getLoginUrl();

    let resp = this.getLogin(this.loginUrl, credentials)
    resp.subscribe({
      next: (response) => {
        let result = response


        if(result){
          console.log("The response : ",response)
          let fieldValues = JSON.parse(result);
          let keys = Object.keys(fieldValues);
          let values = keys.map(k => fieldValues[k])
          if(keys[1] == "jwtToken"){
            localStorage.setItem('loggedIn', 'logged')
            this.cookiesService.deleteAll;
            this.cookiesService.set("token", values[1])
            this.cookiesService.set("username",values[0]);
            if(showMessage){
              window.location.href = '/home';
            }
          }

        }
      }, 
      error: (err) => {alert("Connection error")},
      complete: () => {console.info('complete')}
    })
  }
}
