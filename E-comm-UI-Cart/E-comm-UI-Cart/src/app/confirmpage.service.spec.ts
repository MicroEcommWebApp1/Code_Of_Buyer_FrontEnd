import { TestBed } from '@angular/core/testing';

import { ConfirmpageService } from './confirmpage.service';

describe('ConfirmpageService', () => {
  let service: ConfirmpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
