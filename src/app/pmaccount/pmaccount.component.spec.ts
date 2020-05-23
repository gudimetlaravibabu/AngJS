import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PMAccountComponent } from './pmaccount.component';

describe('PMAccountComponent', () => {
  let component: PMAccountComponent;
  let fixture: ComponentFixture<PMAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PMAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PMAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
