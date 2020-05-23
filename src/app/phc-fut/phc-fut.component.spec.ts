import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhcFutComponent } from './phc-fut.component';

describe('PhcFutComponent', () => {
  let component: PhcFutComponent;
  let fixture: ComponentFixture<PhcFutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhcFutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhcFutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
