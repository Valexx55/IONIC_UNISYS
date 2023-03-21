import { TestBed } from '@angular/core/testing';

import { AccesoDniGuard } from './acceso-dni.guard';

describe('AccesoDniGuard', () => {
  let guard: AccesoDniGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccesoDniGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
