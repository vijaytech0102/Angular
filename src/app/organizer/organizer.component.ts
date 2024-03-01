import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.css']
})
export class OrganizerComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  viewYourBookings()
{
  this.router.navigate(['/organizer/mybookings'])
}

viewYourEvents()
{
  this.router.navigate(['/organizer/allevents'])
}
viewYourPayments(){
  this.router.navigate(['/organizer/mypayments'])
}


}
