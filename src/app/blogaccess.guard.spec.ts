import { TestBed } from '@angular/core/testing';

import { BlogaccessGuard } from './blogaccess.guard';

describe('BlogaccessGuard', () => {
  let guard: BlogaccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BlogaccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
