import { TestBed } from '@angular/core/testing';

import { CoustmerService } from './coustmer.service';

describe('CoustmerService', () => {
  let service: CoustmerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoustmerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
