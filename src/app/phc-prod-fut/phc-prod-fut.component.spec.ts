import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhcProdFutComponent } from './phc-prod-fut.component';

describe('PhcProdFutComponent', () => {
  let component: PhcProdFutComponent;
  let fixture: ComponentFixture<PhcProdFutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhcProdFutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhcProdFutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
