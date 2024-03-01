import { Component, OnInit } from '@angular/core';
import { Booking } from '../model/booking.model';
import { BookingService } from '../services/booking.service';
import { NavigationExtras, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent implements OnInit {

  // You may use this array to store booking data
  organizerObj: any[] = [];
  bookingArray: any[] = [];
  organizerId: number;
  userName: string;
  bookingDetailsByUserName:any[]=[];

  constructor(private bookingService: BookingService, private router: Router, private authService:AuthService) {
    this.userName=this.authService.getUserName();
  }

  ngOnInit(): void {
    this.getAllBooking();
  }

  getAllBooking() {
    this.bookingService.getAllBookings()
      .subscribe((res) => {
        this.organizerObj = res;
        console.log(res);
        this.filterByUserName();
        this.filter();
      })
  }

filterByUserName()
{
  this.bookingArray=this.organizerObj.filter(organizer=> organizer.userName===this.userName);
}

  filter() {

    // this.bookingArray = this.organizerObj[0].bookings;
    // console.log("Booking Array Details:",this.bookingArray);
    // console.log(this.userName);
    // this.organizerId = this.organizerObj[0].organizerId;
    // console.log(this.organizerId);
    this.bookingDetailsByUserName=(this.bookingArray[0].bookings);
    this.organizerId=this.bookingArray[0].organizerId;

  }
  paymentFour(amount: any, bookingId: number) {
    this.router.navigate(['organizer/payment'], { queryParams: { amount: amount, bookingId: bookingId } });
  }
  paymentSix(amount: any, bookingId: number) {
    this.router.navigate(['organizer/remainingpayment'], { queryParams: { amount: amount, bookingId: bookingId } });
  }

  isPayment40Disabled(booking: any): boolean {
    if (booking.bookingStatus === 'pending' || booking.bookingStatus === 'Pending') {
      return true; // Disable 60% button if status is confirmed
    } else if (booking.bookingStatus === 'confirmed' || booking.bookingStatus === 'Confirmed') {
      return true; // Enable 40% button if status is verified
    } else if(booking.bookingStatus === 'Booked') {
      return true; // Default to disable 60% button
    }
    else {
      return false; // Default to disable 60% button
    }
  }

  isPayment60Disabled(booking: any): boolean {
    if (booking.bookingStatus === 'verified' || booking.bookingStatus === 'pending') {
      return true; // Disable 60% button if status is confirmed
    } else if (booking.bookingStatus === 'Verified' || booking.bookingStatus === 'Pending') {
      return true; // Enable 40% button if status is verified
    }
    else if(booking.bookingStatus === 'Booked') {
      return true; // Default to disable 60% button
    }
    else {
      return false; // Default to disable 60% button
    }
  }

}
