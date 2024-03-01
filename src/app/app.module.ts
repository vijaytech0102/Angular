import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { OrganizerNavbarComponent } from './organizer-navbar/organizer-navbar.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddEventComponent } from './add-event/add-event.component';
import { EventListComponent } from './event-list/event-list.component';

import { AddFacilityComponent } from './add-facility/add-facility.component';
import { FacilityListComponent } from './facility-list/facility-list.component';
import { OrganizerEventsComponent } from './organizer-events/organizer-events.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { MyPaymentsComponent } from './my-payments/my-payments.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { OrganizerDashboardComponent } from './organizer-dashboard/organizer-dashboard.component';
import { AdminBookingComponent } from './admin-booking/admin-booking.component';
import { PaymentComponent } from './payment/payment.component';
import { AuthService } from './services/auth.service';
import { HomeComponent } from './home/home.component';
import { EventService } from './services/event.service';
import { AuthInterceptor } from './model/auth-interceptor';
import { RemainingPaymentComponent } from './remaining-payment/remaining-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    OrganizerComponent,
    AdminNavbarComponent,
    OrganizerNavbarComponent,
    LoginComponent,
    RegistrationComponent,
    NavbarComponent,
    AddEventComponent,
    EventListComponent,
    AddFacilityComponent,
    FacilityListComponent,
    OrganizerEventsComponent,
    MyBookingsComponent,
    MyPaymentsComponent,
    AdminDashboardComponent,
    OrganizerDashboardComponent,
    AdminBookingComponent,
    PaymentComponent,
    HomeComponent,
    RemainingPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, EventService,
    {provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
