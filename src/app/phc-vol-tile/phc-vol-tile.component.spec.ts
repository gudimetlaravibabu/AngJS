import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhcVolTileComponent } from './phc-vol-tile.component';

describe('PhcVolTileComponent', () => {
  let component: PhcVolTileComponent;
  let fixture: ComponentFixture<PhcVolTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhcVolTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhcVolTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
