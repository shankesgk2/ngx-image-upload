import { TestBed, inject } from '@angular/core/testing';

import { NgxImageUploadService } from './ngx-image-upload.service';

describe('NgxImageUploadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxImageUploadService]
    });
  });

  it('should be created', inject([NgxImageUploadService], (service: NgxImageUploadService) => {
    expect(service).toBeTruthy();
  }));
});
