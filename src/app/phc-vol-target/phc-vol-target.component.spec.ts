import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhcVolTargetComponent } from './phc-vol-target.component';

describe('PhcVolTargetComponent', () => {
  let component: PhcVolTargetComponent;
  let fixture: ComponentFixture<PhcVolTargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhcVolTargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhcVolTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
