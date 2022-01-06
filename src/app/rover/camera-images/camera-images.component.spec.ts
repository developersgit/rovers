import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraImagesComponent } from './camera-images.component';

describe('CameraImagesComponent', () => {
  let component: CameraImagesComponent;
  let fixture: ComponentFixture<CameraImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CameraImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
