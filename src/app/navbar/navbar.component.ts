import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


userHasRole(arg0: string): boolean {
  return this.cookiesService.get('role').endsWith(arg0);
}


  constructor(private router: Router, private cookiesService: CookieService) {}
  selectedOption: string = '';

  selectOption(option: string) {
    this.router.navigate([`/${option}`]);
  }

  isLoged(): any {
    return this.cookiesService.get('token') !== '';
  }

  Logout() {
    this.cookiesService.deleteAll();
    this.router.navigate(['/home']);
  }
}