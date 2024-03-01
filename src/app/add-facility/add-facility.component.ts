import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacilityService } from '../services/facility.service';
import { Facility } from '../model/facility.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-facility',
  templateUrl: './add-facility.component.html',
  styleUrls: ['./add-facility.component.css']
})
export class AddFacilityComponent implements OnInit {

  formValue!: FormGroup;
  //formValue: FormGroup;
  facilities: Facility[] = [];

  constructor(private service: FacilityService, private fb: FormBuilder, private router:Router) {
   }

  ngOnInit() {
    this.formValue = this.fb.group({
      facilityDescription: ['', Validators.required],
      price: ['', Validators.required],
  })
  }

  addNewFacility(){
    if(this.formValue.valid)
    {
     const obj= this.formValue.value;
     this.service.addFacility(obj).subscribe((res)=>{
       console.log(res);
        this.nav();
      this.ngOnInit();
    });
    }

    }
    nav()
    {
      this.router.navigate(['/admin/facilitylist']);
    }
}
