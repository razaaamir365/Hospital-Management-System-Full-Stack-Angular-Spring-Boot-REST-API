import { TestBed } from '@angular/core/testing';

import { AdminauthenticateService } from './adminauthenticate-service';

describe('AdminauthenticateService', () => {
  let service: AdminauthenticateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminauthenticateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
