import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsAllTileComponent } from './accounts-all-tile.component';

describe('AccountsAllTileComponent', () => {
  let component: AccountsAllTileComponent;
  let fixture: ComponentFixture<AccountsAllTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsAllTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsAllTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
