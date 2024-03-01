import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
//import { User } from 'src/app/models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../model/booking.model';
import { PaymentService } from '../services/payment.service';
import { Payment } from '../model/payment.model';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentForm:FormGroup;
  amounts: any;
  bookingId:number;
  amount:number=0;
  advance:number=0;
  balance:number=0;
  payment:Payment=new Payment();
  date:string;
  constructor(private formBuilder:FormBuilder,
    private paymentService:PaymentService,
    private router:Router, private route: ActivatedRoute) {
    this.createForm();
  }

  ngOnInit(): void {
    // Retrieve data from the query parameters
    this.amounts = this.route.snapshot.queryParams['amount'];
    this.bookingId = this.route.snapshot.queryParams['bookingId'];
    console.log('Received amount: & Id:', this.amounts);
    console.log('Received Id:',this.bookingId);
    this.foo();
    console.log(this.payment);
  }

  //show:boolean=false;

  createForm()
  {
    this.paymentForm = this.formBuilder.group({
        amount:[''],
        amountpaid:[''],
        balanceamount:[''],
        paymentDate:[0,Validators.required],
        modeOfPayement:['',Validators.required]

    });
  }
  payAmount()
  {
    if(this.paymentForm.valid)
    {
      this.paymentForm.controls.amountpaid.setValue(this.advance);
      this.payment.amount=this.advance;
      this.payment.paymentDate=this.paymentForm.value.paymentDate;
      this.date=this.paymentForm.value.paymentDate;
      console.log(this.date);
      this.payment.modeOfPayement=this.paymentForm.value.modeOfPayement;
      this.paymentForm.controls.balanceamount.setValue(this.balance);

      console.log(this.payment);
      this.paymentService.createPayment(this.bookingId,this.payment)
      .subscribe((res)=>{
        console.log("response of payment details:",res);
        alert("Payment successful");
      })
      console.log("Details from Payment Form: ",this.paymentForm.value);

    }
  }
  foo(){
    this.paymentForm.controls.amount.setValue(this.amounts);

    // Calculate advance and balance values
    this.advance = this.amounts * 0.4;
    this.balance = this.amounts * 0.6;

    // Set the values in the form controls
    this.paymentForm.controls.amountpaid.setValue(this.advance);
    this.paymentForm.controls.balanceamount.setValue(this.balance);
      //this.show=true;
  }

myPayment()
{
  this.router.navigate(['organizer/mybookings']);
}

}
