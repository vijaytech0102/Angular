import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Facility } from '../model/facility.model';
import { FacilityService } from '../services/facility.service';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {

  facilities:Facility[]=[];
   filterFacility:Facility[]=[];
   filtershow:boolean=false;
   eve:Facility=null;
   facilityDescription:string;
   eventForm: FormGroup;
  formValue!: FormGroup;
  facilityModel:Facility=new Facility();
  pop!: boolean;
  showAdd!: boolean;
  showUpdate!: boolean;

  constructor(private service:FacilityService,private formBuilder:FormBuilder) {
    this.createForm();
   }
  ngOnInit(): void {
    this.getFacilities();
    this.filtershow=false;
  }
createForm(){
   this.formValue=this.formBuilder.group({
    facilityDescription:['',Validators.required],
      price:[0,Validators.required]
   });
}
  getFacilities(){
    this.service.getAllFacilities().subscribe((res) =>{
      this.facilities=res;
  });
  }
  deleteFacility(facilityId:number){
    this.service.deleteFacility(facilityId).subscribe(()=>{this.ngOnInit();});
  }
  updateFacility() {
    this.facilityModel.facilityDescription = this.formValue.value.facilityDescription;
    this.facilityModel.price = this.formValue.value.price;
    console.log("We are in the update event");
    console.log(this.facilityModel);
    this.service.updateFacility(this.facilityModel.facilityId, this.facilityModel)
      .subscribe(res => {
        alert("Updated successfully");
        this.ngOnInit();
        this.pop = false;
      })
  }
  onEdit(row:Facility) {
    //  alert("We are in the edit functionality");
    console.log(row);
    this.pop = true;
    this.showAdd = false;
    this.showUpdate = true;
    // alert(this.showUpdate);

    this.facilityModel.facilityId = row.facilityId;
    this.formValue.controls['facilityDescription'].setValue(row.facilityDescription);
    this.formValue.controls['price'].setValue(row.price);
    // alert("hi");
    let ref = document.getElementById("cancel")
    // ref?.click();
    // this.formValue.reset();
    // this.updateEvent();
    this.getFacilities();
  }
  search(){
    this.filtershow=true;
    this.filterFacility=this.facilities.filter(items=>items.facilityDescription.toLocaleLowerCase().includes(this.facilityDescription.toLocaleLowerCase()));
  }
  add()
  {

  }

}
