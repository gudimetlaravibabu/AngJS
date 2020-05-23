import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pm3accountComponent } from './pm3account.component';

describe('Pm3accountComponent', () => {
  let component: Pm3accountComponent;
  let fixture: ComponentFixture<Pm3accountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pm3accountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pm3accountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
