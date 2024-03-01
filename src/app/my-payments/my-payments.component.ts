import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { BookingService } from '../services/booking.service';
import { Payment } from '../model/payment.model';

@Component({
  selector: 'app-my-payments',
  templateUrl: './my-payments.component.html',
  styleUrls: ['./my-payments.component.css']
})
export class MyPaymentsComponent implements OnInit {



  organizerObj: any[] = [];
  bookingArray: any[] = [];
  organizerId: number;
  userName: string;
  bookingDetailsByUserName:any[]=[];
  paymentArray:any[]=[];
  payment:Payment;
  Ashish:any[]=[];


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
    console.log( "Ashish    ",this.bookingDetailsByUserName);
    this.organizerId=this.bookingArray[0].organizerId;
    //console.log(this.bookingDetailsByUserName[0].payment);



  }
}
