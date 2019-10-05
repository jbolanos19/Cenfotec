import { TestBed } from '@angular/core/testing';

import { LoaderFactoryService } from './loader-factory.service';

describe('LoaderFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoaderFactoryService = TestBed.get(LoaderFactoryService);
    expect(service).toBeTruthy();
  });
});
