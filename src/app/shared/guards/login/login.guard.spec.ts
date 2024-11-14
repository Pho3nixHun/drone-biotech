// login.guard.spec.ts
import { TestBed } from '@angular/core/testing';
import { LoginGuardMock, provideLoginGuard, updateLoggedIn } from './login.guard.mock';
import { provideRouter } from '@angular/router';
import { routes } from 'src/app/app.routes';

describe('LoginGuard', () => {
  let loginGuardMock: LoginGuardMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideLoginGuard(), provideRouter(routes)],
    });

    loginGuardMock = TestBed.inject(LoginGuardMock);
  });

  it('should allow access when there is no user logged in', async () => {
    updateLoggedIn(false);
    const result = await loginGuardMock.canActivate();
    expect(result).toBe(true);
  });

  it('should not allow access when the user is logged in', async () => {
    updateLoggedIn(true);
    const result = await loginGuardMock.canActivate();
    expect(result).toBe(false);
  });
});
