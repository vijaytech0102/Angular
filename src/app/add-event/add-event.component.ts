import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  formValue!: FormGroup;
//formValue: FormGroup;
event: Event[] = [];
events: Event[] = [];
// eventModel: Event = new Event();
// pop: boolean;
// showAdd!: boolean;
// ShowUpdate!: boolean;
constructor(private service: EventService, private fb: FormBuilder, private router:Router) {

 }

ngOnInit() {
  this.formValue = this.fb.group({
    eventType: ['', Validators.required],
    description: ['', Validators.required],
    participantsCount: [0, Validators.min(0)],
    eventCharges: [0, Validators.min(0)]
})
}

addNewEvent(){

  if(this.formValue.valid)
  {
   const obj= this.formValue.value;
   console.log(obj);
   this.service.addEvent(obj).subscribe((res)=>{
     console.log(res);
    this.ngOnInit();
    this.nav();
  });
  }
  }
nav()
{
this.router.navigate(['/admin/eventlist']);
}
}
