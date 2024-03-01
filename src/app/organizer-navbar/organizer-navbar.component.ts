  import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organizer-navbar',
  templateUrl: './organizer-navbar.component.html',
  styleUrls: ['./organizer-navbar.component.css']
})
export class OrganizerNavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigate(["/login"])
      }
myBooking()
{
  this.router.navigate(['/organizer/mybookings']);
}
myPayment()
{
  this.router.navigate(['/organizer/mypayments']);
}
allEvents()
{
  this.router.navigate(['/organizer/allevents']);
}
home()
{
  this.router.navigate(['/organizer']);
}
dashboard()
{
  this.router.navigate(['/organizer/dashboard']);
}
}
