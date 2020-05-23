import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsTileComponent } from './accounts-tile.component';

describe('AccountsTileComponent', () => {
  let component: AccountsTileComponent;
  let fixture: ComponentFixture<AccountsTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
