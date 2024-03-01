import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-admin-booking',
  templateUrl: './admin-booking.component.html',
  styleUrls: ['./admin-booking.component.css']
})
export class AdminBookingComponent implements OnInit {

  organizerObj: any[] = [];
  bookings: any[] = [];
  organizerId: number;
  userName: string;
  organizerResult: any[];

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    // Assuming you have a method in your service to get bookings
    this.getAllBooking();
  }
  updateStatus(bookingId: number, newStatus: string) {
    // Assuming you have a method in your service to update booking status
    console.log(bookingId+newStatus);
    this.bookingService.updateBookingStatus(bookingId, newStatus)
    .subscribe((res)=>{
      console.log(res);
    })
  }
  getAllBooking() {
    this.bookingService.getAllBookings()
      .subscribe((res) => {
        this.organizerObj = res;
        console.log(res);
        this.filterDataFromNull();
        console.log(this.organizerObj);
      })
  }
  // Assuming your data is stored in a variable called organizers
organizers:any = [
  // ... your data here
];
filterDataFromNull()
{
this.organizers = this.organizerObj.filter(organizer => organizer.bookings.length > 0);
console.log("filtered Data",this.organizers);
}
// Filter out organizers with empty bookings

booking: any = {
  // other properties
  bookingStatus: 'Pending', // Set the default value to 'Pending'
};

}

