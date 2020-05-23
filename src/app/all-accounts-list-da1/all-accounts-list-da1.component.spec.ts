import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAccountsListDA1Component } from './all-accounts-list-da1.component';

describe('AllAccountsListDA1Component', () => {
  let component: AllAccountsListDA1Component;
  let fixture: ComponentFixture<AllAccountsListDA1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAccountsListDA1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAccountsListDA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
