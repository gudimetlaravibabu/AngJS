import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhcNonProdFutComponent } from './phc-non-prod-fut.component';

describe('PhcNonProdFutComponent', () => {
  let component: PhcNonProdFutComponent;
  let fixture: ComponentFixture<PhcNonProdFutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhcNonProdFutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhcNonProdFutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
