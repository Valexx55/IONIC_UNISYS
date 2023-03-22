import { TestBed } from '@angular/core/testing';

import { GpsGuard } from './gps.guard';

describe('GpsGuard', () => {
  let guard: GpsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GpsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
