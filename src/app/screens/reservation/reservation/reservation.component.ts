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
  tennisCourt: CourtElement;
  userTennis: UserElement;

  constructor(){
    this.id = 0;
    this.date = new Date();
    this.hour = { hours: 0, minutes: 0 };
    this.tennisCourt = new CourtElement();
    this.userTennis = new UserElement();
  }
}


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {

  public reservation : ReservationElement = new ReservationElement();

  id: string;
  user_id: string;

  constructor(
    private route: ActivatedRoute,
    private reservationService: ReservationService,
    private userService: UserService,
    private courtService: CourtService    
  ) {

    this.id = this.route.snapshot.paramMap.get('idCourt') || '';
    this.user_id = this.route.snapshot.paramMap.get('user_id') || '';    
  }

  async createReservation() {
    const court = await this.courtService.getCourtById(this.id);
    const user = await this.userService.getUserById(this.user_id);

    if (court && user) {
      this.reservation.tennisCourt = court;
      this.reservation.userTennis = user;
      debugger;
      this.reservationService.reserveCourt(this.reservation);
    } else {
      console.error('Court or User not found');
    }
  }
}
