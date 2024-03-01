import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  addEvent()
  {
    this.router.navigate(["admin/addevent"])
  }

  listEvent()
  {
    this.router.navigate(["admin/eventlist"])
  }
  booking()
  {
    this.router.navigate(["admin/booking"])
  }

  addFacility(){
    this.router.navigate(["admin/addfacility"])
  }
  listFacility()
  {
    this.router.navigate(["admin/facilitylist"])
  }
  listBooking()
  {
    this.router.navigate(["admin/listbooking"]);
  }
}
