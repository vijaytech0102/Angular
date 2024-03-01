import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainingPaymentComponent } from './remaining-payment.component';

describe('RemainingPaymentComponent', () => {
  let component: RemainingPaymentComponent;
  let fixture: ComponentFixture<RemainingPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemainingPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemainingPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
