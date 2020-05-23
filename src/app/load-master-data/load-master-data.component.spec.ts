import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadMasterDataComponent } from './load-master-data.component';

describe('LoadMasterDataComponent', () => {
  let component: LoadMasterDataComponent;
  let fixture: ComponentFixture<LoadMasterDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadMasterDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadMasterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
