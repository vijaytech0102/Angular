import { Component,  OnInit} from '@angular/core';
import { EventService } from '../services/event.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Event } from '../model/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  evs:Event[]=[];
   filterEvent:Event[]=[];
   filtershow:boolean=false;
   eve:Event=null;
   eventType:string;
   eventForm: FormGroup;
  formValue!: FormGroup;
  eventModel:Event=new Event();
  pop!: boolean;
  showAdd!: boolean;
  showUpdate!: boolean;

  constructor(private service:EventService,private formBuilder:FormBuilder) {
    this.createForm();
   }

  ngOnInit(): void {
    this.getEvents();
    this.filtershow=false;
  }
createForm(){
   this.formValue=this.formBuilder.group({
    eventType:['',Validators.required],
      description:['',Validators.required],
      participantsCount:[0,Validators.required],
      eventCharges:[0,Validators.required]
   });
}
  getEvents(){
    this.service.getAllEvents().subscribe((res) =>{
      this.evs=res;
  });
  }
  deleteEvent(eventId:number){
    this.service.deleteEvent(eventId).subscribe(()=>{this.ngOnInit();});
  }
  updateEvent() {
    this.eventModel.eventType = this.formValue.value.eventType;
    this.eventModel.description = this.formValue.value.description;
    this.eventModel.participantsCount = this.formValue.value.participantsCount;
    this.eventModel.eventCharges = this.formValue.value.eventCharges;
    console.log("We are in the update event");
    console.log(this.eventModel);
    this.service.updateEvent(this.eventModel.eventId, this.eventModel)
      .subscribe(res => {
        // alert("Updated successfully");
        this.ngOnInit();
        this.pop = false;
      })

    // const modalElement = this.myModal.nativeElement;
    // modalElement.classList.remove('show');
    // modalElement.style.display = 'none';
    // document.body.classList.remove('modal-open');
    // const backdropElement = document.querySelector('.modal-backdrop');
    // if (backdropElement) {
    //   backdropElement.remove();
    // }
  }
  onEdit(row: Event) {
    //  alert("We are in the edit functionality");
    console.log(row);
    this.pop = true;
    this.showAdd = false;
    this.showUpdate = true;
    // alert(this.showUpdate);

    this.eventModel.eventId = row.eventId;
    this.formValue.controls['eventType'].setValue(row.eventType);
    this.formValue.controls['description'].setValue(row.description);
    this.formValue.controls['participantsCount'].setValue(row.participantsCount);
    this.formValue.controls['eventCharges'].setValue(row.eventCharges);
    // alert("hi");

    // this.formValue.reset();
    // this.updateEvent();
    this.getEvents();
  }
  search(){
    this.filtershow=true;
    this.filterEvent=this.evs.filter(items=>items.eventType.toLocaleLowerCase().includes(this.eventType.toLocaleLowerCase()));
  }
  add()
  {

  }
}
