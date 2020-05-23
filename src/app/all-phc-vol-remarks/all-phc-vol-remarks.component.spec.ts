import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPhcVolRemarksComponent } from './all-phc-vol-remarks.component';

describe('AllPhcVolRemarksComponent', () => {
  let component: AllPhcVolRemarksComponent;
  let fixture: ComponentFixture<AllPhcVolRemarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPhcVolRemarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPhcVolRemarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
