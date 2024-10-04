import { Component } from '@angular/core';

@Component({
  selector: 'app-court',
  templateUrl: './court.component.html',
  styleUrl: './court.component.css'
})
export class CourtComponent {
  courts: any;
  
  }

export class CourtElement{
  id: number;
  is_indoor: boolean;
  name: string;
  image_profile: string; 

  constructor(){
    this.id = 0;
    this.is_indoor = false;
    this.name = '';
    this.image_profile = '';
  }
}



