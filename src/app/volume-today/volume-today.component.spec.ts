import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeTodayComponent } from './volume-today.component';

describe('VolumeTodayComponent', () => {
  let component: VolumeTodayComponent;
  let fixture: ComponentFixture<VolumeTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
