import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhcTodayLWDComponent } from './phc-today-lwd.component';

describe('PhcTodayLWDComponent', () => {
  let component: PhcTodayLWDComponent;
  let fixture: ComponentFixture<PhcTodayLWDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhcTodayLWDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhcTodayLWDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
