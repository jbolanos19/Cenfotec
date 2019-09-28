import { TestBed } from '@angular/core/testing';

import { BallotsService } from './ballots.service';

describe('BallotsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BallotsService = TestBed.get(BallotsService);
    expect(service).toBeTruthy();
  });
});
