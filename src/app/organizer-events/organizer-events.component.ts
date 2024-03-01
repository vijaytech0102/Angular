import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Event } from '../model/event.model';
import { EventService } from '../services/event.service';
import { BookingService } from '../services/booking.service';
import { Booking } from '../model/booking.model';
import { Facility } from '../model/facility.model';
import { FacilityService } from '../services/facility.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-organizer-events',
  templateUrl: './organizer-events.component.html',
  styleUrls: ['./organizer-events.component.css']
})
export class OrganizerEventsComponent implements OnInit {

  events:Event[]=[];
  booking:Booking=new Booking();
   filterEvent:Event[]=[];
   filtershow:boolean=false;
   eve:Event=null;
   eventType:string;
  formValue!: FormGroup;
  pop!: boolean;
  showAdd!: boolean;
  showUpdate!: boolean;
  eventId!:number;
  organizerId:number;
  facilities:Facility[]=[];
  selectedItems:any[]=[];

  constructor(private service:EventService, private bookingService:BookingService,
    private formBuilder:FormBuilder, private facilityService:FacilityService,private authService:AuthService) {
    this.createForm();
   }


  ngOnInit(): void {
    this.getEvents();
    this.filtershow=false;

    this.getFacilities();
  }

createForm(){
   this.formValue=this.formBuilder.group({
    userName:['',Validators.required],
      submissionDate:['',Validators.required],
      eventDate:['',Validators.required],
      description:['',Validators.required],
      headCount:[0,Validators.required],
      amount:[0,Validators.required]
   });
}
  getEvents(){
    this.service.getAllEvents().subscribe((res) =>{
      this.events=res;
  });
  }
  saveEventId(eventId:number)
  {
    console.log(eventId)
    this.eventId=eventId;
    console.log(this.authService.getUserName());
    this.formValue.controls.userName.setValue(this.authService.getUserName());
  }


  search(){
    this.filtershow=true;
    this.filterEvent=this.events.filter(items=>items.eventType.toLocaleLowerCase().includes(this.eventType.toLocaleLowerCase()));
  }
  addNewBooking(){
    // console.log(this.selectedItems);
    this.addDataToBooking();
    if(this.formValue.valid)
    {
    //  this.booking= this.formValue.value;

    console.log("inside bokking");
      console.log(this.booking);
      this.bookingService.addBooking(this.booking).
      subscribe((res)=>{
        console.log(res);
        alert("Event Booked");
      })
    }
  }
  getFacilities()
  {
      this.facilityService.getAllFacilities()
      .subscribe((res)=>{
        this.facilities=res;

      })
  }




onCheckboxChange(event: any, item: any) {
  if (event.target.checked) {
    this.selectedItems.push(item); // Add selected item to the array
  } else {
    const index = this.selectedItems.indexOf(item);
    if (index !== -1) {
      this.selectedItems.splice(index, 1); // Remove unselected item from the array
    }
  }

  }
addDataToBooking(){
  this.booking.amount=this.formValue.value.amount;
  this.booking.submissionDate=this.formValue.value.submissionDate;
  this.booking.description=this.formValue.value.description;
  this.booking.eventDate=this.formValue.value.eventDate;
  this.booking.headCount=this.formValue.value.headCount;
  this.booking.userName=this.formValue.value.userName;
  this.booking.eventId=this.eventId;
  this.booking.facilitiesId=this.selectedItems;
}
  deb()
  {
    console.log(this.facilities);
    console.log(this.selectedItems);
  }
}
