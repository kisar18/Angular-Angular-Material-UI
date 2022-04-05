import { TestBed } from '@angular/core/testing';

import { FormResultsService } from './form-results.service';

describe('FormResultsService', () => {
  let service: FormResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
