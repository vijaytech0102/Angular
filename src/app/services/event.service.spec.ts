import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EventService } from './event.service';

describe('EventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EventService],
    });
  });

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

  // it('should be created', inject([EventService], (service: EventService) => {
  //   expect(service).toBeTruthy();
  // }));

  fit('frontend_EventService_should get all events', inject([EventService, HttpTestingController], (service: EventService, httpMock: HttpTestingController) => {
    service['getAllEvents']().subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/api/event`);
    expect(req.request.method).toBe('GET');
    req.flush({}); // Mock successful response
  }));

  fit('frontend_EventService_should add an event', inject([EventService, HttpTestingController], (service: EventService, httpMock: HttpTestingController) => {
    const mockEvent = { eventType: 'Conference', description: 'Tech Conference', participantsCount: 100, eventCharges: 50 };

    service['addEvent'](mockEvent).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/api/event`);
    expect(req.request.method).toBe('POST');
    req.flush({}); // Mock successful response
  }));

  fit('frontend_EventService_should add an event by authorization', inject([EventService, HttpTestingController], (service: EventService, httpMock: HttpTestingController) => {
    const mockEvent = { eventType: 'Conference', description: 'Tech Conference', participantsCount: 100, eventCharges: 50 };

    service['addEvent'](mockEvent).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/api/event`);
    expect(req.request.headers.has('Authorization')).toEqual(true);
    req.flush({}); // Mock successful response
  }));
});
