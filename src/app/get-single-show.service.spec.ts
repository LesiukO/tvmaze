import { TestBed } from '@angular/core/testing';

import { GetSingleShowService } from './get-single-show.service';

describe('GetSingleShowService', () => {
  let service: GetSingleShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSingleShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
