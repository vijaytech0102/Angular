import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RegistrationService } from './registration.service';

describe('RegistrationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RegistrationService],
    });
  });

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

  // it('should be created', inject([RegistrationService], (service: RegistrationService) => {
  //   expect(service).toBeTruthy();
  // }));

  fit('frontend_RegistrationService_should get all organizers', inject([RegistrationService, HttpTestingController], (service: RegistrationService, httpMock: HttpTestingController) => {
    service['getAllOrganizers']().subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/api/registration/organizer`);
    expect(req.request.method).toBe('GET');
    req.flush({}); // Mock successful response
  }));

  fit('frontend_RegistrationService_should get all organizers with bearer token', inject([RegistrationService, HttpTestingController], (service: RegistrationService, httpMock: HttpTestingController) => {
    service['getAllOrganizers']().subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/api/registration/organizer`);
    expect(req.request.headers.has('Authorization')).toEqual(true);
    req.flush({}); // Mock successful response
  }));

  fit('frontend_RegistrationService_should register an organizer', inject([RegistrationService, HttpTestingController], (service: RegistrationService, httpMock: HttpTestingController) => {
    const mockOrganizer = { mobileNumber: 1234567890 };

    service['registerOrganizer'](mockOrganizer).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/api/registration/organizer`);
    expect(req.request.method).toBe('POST');
    req.flush({}); // Mock successful response
  }));
});
