import { TestBed } from '@angular/core/testing';

import { PlatoFilterService } from './plato-filter.service';

describe('PlatoFilterService', () => {
  let service: PlatoFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatoFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
