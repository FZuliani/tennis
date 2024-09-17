import { Component } from '@angular/core';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username : string = '';
  password : string = '';

  constructor(private loginService: LoginService) { 
    
  }
  onSubmit() {
    const credentials = {
      username: this.username,
      password: this.password
    }
    this.loginService.checkCredentials(credentials, true);
  }
}
