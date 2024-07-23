import { TestBed } from '@angular/core/testing';

import { WorldbankAPIService } from './worldbank-api.service';

describe('WorldbankAPIService', () => {
  let service: WorldbankAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldbankAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
