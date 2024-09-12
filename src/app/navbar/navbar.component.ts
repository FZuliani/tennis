import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  selectedOption: string = '';

  selectOption(option: string) {
    this.selectedOption = option;
    console.log('Option selected:', this.selectedOption);
  }
}