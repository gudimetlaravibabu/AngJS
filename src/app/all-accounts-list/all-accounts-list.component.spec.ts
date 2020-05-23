import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAccountsListComponent } from './all-accounts-list.component';

describe('AllAccountsListComponent', () => {
  let component: AllAccountsListComponent;
  let fixture: ComponentFixture<AllAccountsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAccountsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAccountsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
