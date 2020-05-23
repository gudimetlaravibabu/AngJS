import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhcVolSummaryComponent } from './phc-vol-summary.component';

describe('PhcVolSummaryComponent', () => {
  let component: PhcVolSummaryComponent;
  let fixture: ComponentFixture<PhcVolSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhcVolSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhcVolSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
