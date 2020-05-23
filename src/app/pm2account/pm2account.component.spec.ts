import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pm2accountComponent } from './pm2account.component';

describe('Pm2accountComponent', () => {
  let component: Pm2accountComponent;
  let fixture: ComponentFixture<Pm2accountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pm2accountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pm2accountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
