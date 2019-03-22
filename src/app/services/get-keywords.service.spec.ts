import { TestBed } from '@angular/core/testing';

import { GetKeywordsService } from './get-keywords.service';

describe('GetKeywordsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetKeywordsService = TestBed.get(GetKeywordsService);
    expect(service).toBeTruthy();
  });
});
