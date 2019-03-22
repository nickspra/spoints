import { TestBed } from '@angular/core/testing';

import { KeywordScraperService } from './keyword-scraper.service';

describe('KeywordScraperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeywordScraperService = TestBed.get(KeywordScraperService);
    expect(service).toBeTruthy();
  });
});
