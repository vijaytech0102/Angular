import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FacilityService } from './facility.service';

describe('FacilityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FacilityService],
    });
  });

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

  // it('should be created', inject([FacilityService], (service: FacilityService) => {
  //   expect(service).toBeTruthy();
  // }));

  fit('frontend_FacilityService_should add a facility', inject([FacilityService, HttpTestingController], (service: FacilityService, httpMock: HttpTestingController) => {
    const mockFacility = { facilityDescription: 'Meeting Room', price: 50 };

    service['addFacility'](mockFacility).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/api/facility`);
    expect(req.request.method).toBe('POST');
    req.flush({}); // Mock successful response
  }));

  fit('frontend_FacilityService_should add a facility by authorization', inject([FacilityService, HttpTestingController], (service: FacilityService, httpMock: HttpTestingController) => {
    const mockFacility = { facilityDescription: 'Meeting Room', price: 50 };

    service['addFacility'](mockFacility).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/api/facility`);
    expect(req.request.headers.has('Authorization')).toEqual(true);
    req.flush({}); // Mock successful response
  }));

  fit('frontend_FacilityService_should get all facilities', inject([FacilityService, HttpTestingController], (service: FacilityService, httpMock: HttpTestingController) => {
    service['getAllFacilities']().subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/api/facility`);
    expect(req.request.method).toBe('GET');
    req.flush({}); // Mock successful response
  }));
});
