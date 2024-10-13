import { Component, OnInit } from '@angular/core';
import { CourtService } from '../../services/court/court.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

export class CourtElement{
  id: number;
  is_indoor: boolean;
  name: string;
  image_profile: string; 
  type_court: string;

  constructor(){
    this.id = 0;
    this.is_indoor = false;
    this.type_court = '';
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
  courtToCreate: CourtElement = new CourtElement();

  constructor(
    private courtService: CourtService,
    private cookiesService: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.refreshListCourts();
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

  public createCourt() {
    // Ajout du nouveau court à la liste des courts
    this.courtToCreate.id = this.courts.length;
    alert(this.courtToCreate);
    this.courtService.createCourt(this.courtToCreate);

    // Optionnel : Réinitialisation du formulaire
    this.courtToCreate = new CourtElement();
    const modalElement = document.getElementById('createCourtModal');
    
  }

  reserveCourt(idCourt: number) {
    let user_name = this.cookiesService.get('userId');

    //redirection vers reservation component
    this.router.navigate([`/reservation/${idCourt}/${user_name}`]);
  }
}