import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../services/booking.service';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-organizer-dashboard',
  templateUrl: './organizer-dashboard.component.html',
  styleUrls: ['./organizer-dashboard.component.css']
})
export class OrganizerDashboardComponent implements OnInit {

  constructor(private router:Router, private bookingSerive:BookingService, private eventService:EventService) { }

  ngOnInit(): void {
  }
  myBooking()
{
  this.router.navigate(['organizer/mybookings']);

}
myPayment()
{
  this.router.navigate(['organizer/mypayments']);
}
allEvents()
{
  this.router.navigate(['organizer/allevents']);

}
home()
{
  this.router.navigate(['organizer']);
}
dashboard()
{
  this.router.navigate(['organizer/dashboard']);
}

}
