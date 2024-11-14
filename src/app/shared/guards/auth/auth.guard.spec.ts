// login.guard.spec.ts
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { routes } from 'src/app/app.routes';
import { AuthGuardMock, provideAuthGuard, updateAuthenticated } from './auth.guard.mock';

describe('AuthGuard', () => {
  let authGuardMock: AuthGuardMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideAuthGuard(), provideRouter(routes)],
    });
    authGuardMock = TestBed.inject(AuthGuardMock);
  });

  it('should allow access when there is user logged in', async () => {
    updateAuthenticated(true);
    const result = await authGuardMock.canActivate();
    expect(result).toBe(true);
  });

  it('should not allow access when there is no user logged in', async () => {
    updateAuthenticated(false);
    const result = await authGuardMock.canActivate();
    expect(result).toBe(false);
  });
});
