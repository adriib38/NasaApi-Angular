import { TestBed } from '@angular/core/testing';

import { FotoDelDiaService } from './foto-del-dia.service';

describe('FotoDelDiaService', () => {
  let service: FotoDelDiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FotoDelDiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
