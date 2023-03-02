import { TestBed } from '@angular/core/testing';

import { UserAutheGuard } from './user-authe.guard';

describe('UserAutheGuard', () => {
  let guard: UserAutheGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserAutheGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
