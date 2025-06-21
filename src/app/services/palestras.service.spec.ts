import { TestBed } from '@angular/core/testing';

import { PalestrasService } from './palestras.service';

describe('PalestrasService', () => {
  let service: PalestrasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PalestrasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
