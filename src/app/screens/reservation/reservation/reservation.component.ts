import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user/user.service';
import { Time } from '@angular/common';
import { timestamp, Timestamp } from 'rxjs';
import { ReservationService } from '../../../services/reservation/reservation.service';
import { CourtElement } from '../../courts/courts.component';
import { UserElement } from '../../user/user.component';
import { CourtService } from '../../../services/court/court.service';


export class ReservationElement{
  id: number;
  date: Date;
  hour: Time;
  tennisCourtId: number;
  userTennisId: number;

  constructor(){
    this.id = 0;
    this.date = new Date();
    this.hour = { hours: 0, minutes: 0 };
    this.tennisCourtId = 0;
    this.userTennisId = 0;
  }
}


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {

  public reservation : ReservationElement = new ReservationElement();

  court_id: string;
  user_id: string;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private reservationService: ReservationService   
  ) {

    this.court_id = this.route.snapshot.paramMap.get('idCourt') || '';
    this.user_id = this.route.snapshot.paramMap.get('user_id') || '';    
  }

  async createReservation() {
    this.errorMessage = '';
    this.successMessage = '';
    
    this.reservation.userTennisId = parseInt(this.user_id);
    this.reservation.tennisCourtId = parseInt(this.court_id);
    this.reservationService.reserveCourt(this.reservation).then(
      () => {
        this.successMessage = 'Reservation successful!';
      }
    ).catch(
      () => {
        this.errorMessage = 'Reservation failed. Please try again.';
      }
    );
    
  }
}
