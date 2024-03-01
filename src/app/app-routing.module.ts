import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { AddEventComponent } from './add-event/add-event.component';
import { EventListComponent } from './event-list/event-list.component';
import { FacilityListComponent } from './facility-list/facility-list.component';
import { AddFacilityComponent } from './add-facility/add-facility.component';
import { OrganizerEventsComponent } from './organizer-events/organizer-events.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { MyPaymentsComponent } from './my-payments/my-payments.component';
import { OrganizerDashboardComponent } from './organizer-dashboard/organizer-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminBookingComponent } from './admin-booking/admin-booking.component';
import { PaymentComponent } from './payment/payment.component';
import { RemainingPaymentComponent } from './remaining-payment/remaining-payment.component';

const routes: Routes = [

  { path: "login", component: LoginComponent },
  { path: "register", component: RegistrationComponent },
  { path: "", component: HomeComponent },
  { path: "organizer", component: OrganizerComponent, canActivate: [AuthGuard] },
  { path: "admin", component: AdminComponent, canActivate: [AuthGuard] },
  { path: "admin/addevent", component: AddEventComponent, canActivate: [AuthGuard] },
  { path: "admin/eventlist", component: EventListComponent, canActivate: [AuthGuard] },
  { path: "admin/booking", component: AdminBookingComponent, canActivate: [AuthGuard] },
  { path: "admin/dashboard", component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: "admin/addfacility", component: AddFacilityComponent, canActivate: [AuthGuard] },
  { path: "admin/facilitylist", component: FacilityListComponent, canActivate: [AuthGuard] },
  { path: "organizer/allevents", component: OrganizerEventsComponent, canActivate: [AuthGuard] },
  { path: "organizer/mybookings", component: MyBookingsComponent, canActivate: [AuthGuard] },
  { path: "organizer/mypayments", component: MyPaymentsComponent, canActivate: [AuthGuard] },
  { path: "organizer/dashboard", component: OrganizerDashboardComponent, canActivate: [AuthGuard] },
  { path: "organizer/payment", component: PaymentComponent, canActivate: [AuthGuard] },
  { path: "organizer/remainingpayment", component: RemainingPaymentComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
