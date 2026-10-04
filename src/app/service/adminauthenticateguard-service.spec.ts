import { TestBed } from '@angular/core/testing';

import { AdminauthenticateguardService } from './adminauthenticateguard-service';

describe('AdminauthenticateguardService', () => {
  let service: AdminauthenticateguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminauthenticateguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
