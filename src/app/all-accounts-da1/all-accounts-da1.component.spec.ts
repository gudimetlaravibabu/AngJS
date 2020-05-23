import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAccountsDA1Component } from './all-accounts-da1.component';

describe('AllAccountsDA1Component', () => {
  let component: AllAccountsDA1Component;
  let fixture: ComponentFixture<AllAccountsDA1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAccountsDA1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAccountsDA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
