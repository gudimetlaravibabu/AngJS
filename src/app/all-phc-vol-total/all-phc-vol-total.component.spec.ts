import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPhcVolTotalComponent } from './all-phc-vol-total.component';

describe('AllPhcVolTotalComponent', () => {
  let component: AllPhcVolTotalComponent;
  let fixture: ComponentFixture<AllPhcVolTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPhcVolTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPhcVolTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
