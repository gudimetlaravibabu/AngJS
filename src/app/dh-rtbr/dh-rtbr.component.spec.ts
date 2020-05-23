import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DhRtbrComponent } from './dh-rtbr.component';

describe('DhRtbrComponent', () => {
  let component: DhRtbrComponent;
  let fixture: ComponentFixture<DhRtbrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhRtbrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhRtbrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
