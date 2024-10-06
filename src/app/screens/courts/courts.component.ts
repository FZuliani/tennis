import { Component, OnInit } from '@angular/core';
import { FormCreateCourtComponent } from '../form-create-court/form-create-court.component';
import { CourtService } from '../../services/court/court.service';


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

@Component({
  selector: 'app-court',
  templateUrl: './courts.component.html',
  styleUrl: './courts.component.css'
})

export class CourtComponent implements OnInit {
  courts: CourtElement[] = [];

  constructor(
    private courtService: CourtService
  ) { }

  ngOnInit(): void {
    this.refreshListCourts();
  }

  formCreateCourt() {
    const formCourt = new FormCreateCourtComponent();
    formCourt.displayForm();  
  }

  async refreshListCourts() {
    let response = await this.courtService.getCourts();
    this.courts = response as CourtElement[];
  }

  async detailCourt(id: string) {
    let response = await this.courtService.getCourtById(id);
    let court = response as CourtElement;
    console.log(court);
  }

}





