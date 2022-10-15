import { TestBed } from '@angular/core/testing';

import { StatserviceService } from './statservice.service';

describe('StatserviceService', () => {
  let service: StatserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
