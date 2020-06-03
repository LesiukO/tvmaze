import { TestBed } from '@angular/core/testing';

import { GetShowsService } from './get-shows.service';

describe('GetShowsService', () => {
  let service: GetShowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetShowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
