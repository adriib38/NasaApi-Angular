import { TestBed } from '@angular/core/testing';

import { TierraService } from './tierra.service';

describe('TierraService', () => {
  let service: TierraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TierraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
