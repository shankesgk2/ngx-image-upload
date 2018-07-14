import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxImageUploadComponent } from './ngx-image-upload.component';

describe('NgxImageUploadComponent', () => {
  let component: NgxImageUploadComponent;
  let fixture: ComponentFixture<NgxImageUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxImageUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxImageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
