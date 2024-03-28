import { TestBed } from '@angular/core/testing';

import { GetallproductsService } from './getallproducts.service';

describe('GetallproductsService', () => {
  let service: GetallproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetallproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
