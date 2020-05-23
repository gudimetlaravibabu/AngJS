import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pm4accountComponent } from './pm4account.component';

describe('Pm4accountComponent', () => {
  let component: Pm4accountComponent;
  let fixture: ComponentFixture<Pm4accountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pm4accountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pm4accountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
