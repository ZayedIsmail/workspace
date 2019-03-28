import { TestBed } from '@angular/core/testing';

import { FooNg6LibService } from './foo-ng6-lib.service';

describe('FooNg6LibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FooNg6LibService = TestBed.get(FooNg6LibService);
    expect(service).toBeTruthy();
  });
});
