import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoversListComponent } from './rovers-list.component';

describe('RoversListComponent', () => {
  let component: RoversListComponent;
  let fixture: ComponentFixture<RoversListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoversListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoversListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
