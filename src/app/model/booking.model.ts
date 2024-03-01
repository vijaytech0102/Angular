export class Booking{
  bookingId?:number=0;
  userName:string="";
  submissionDate:Date;
  description:string='';
  eventDate:Date;
  bookingStatus:string='pending';
  headCount:number=0;
  amount:number=0;
  facilitiesId:number[]=[];
  eventId:number;
}
