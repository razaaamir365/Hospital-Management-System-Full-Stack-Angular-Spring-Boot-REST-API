import { TestBed } from '@angular/core/testing';

import { DoctorauthenticateguardService } from './doctorauthenticateguard-service';

describe('DoctorauthenticateguardService', () => {
  let service: DoctorauthenticateguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorauthenticateguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
