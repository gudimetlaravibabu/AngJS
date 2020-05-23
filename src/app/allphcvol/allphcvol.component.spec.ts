import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllphcvolComponent } from './allphcvol.component';

describe('AllphcvolComponent', () => {
  let component: AllphcvolComponent;
  let fixture: ComponentFixture<AllphcvolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllphcvolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllphcvolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
