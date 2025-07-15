import { TestBed } from '@angular/core/testing';
import { redirectGuard } from './dashboard-redirect.guard';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Router } from '@angular/router';
import { selectUserRole } from '@stores/auth/auth.selector';
import { AppRouteSegment } from 'src/app/app-route-segment';
import { UserRole } from '@stores/auth/auth.model';

describe('redirectGuard', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mockState = {} as any;
    let mockStore: MockStore;
    let router: Router;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const createRouteSnapshot = (data: any = {}) =>
        ({
            firstChild: {
                data,
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }) as any;

    const executeGuard = (...params: Parameters<typeof redirectGuard>) =>
        TestBed.runInInjectionContext(() => redirectGuard(...params));

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideMockStore()],
        });

        mockStore = TestBed.inject(MockStore);
        router = TestBed.inject(Router);
    });

    it('should return redirect to notfound if allowedRole !== currentRole', async () => {
        mockStore.overrideSelector(selectUserRole, UserRole.CUSTOMER);

        const route = createRouteSnapshot({ allowedRole: UserRole.PILOT });

        const result = await executeGuard(route, mockState);

        expect(result).toEqual(
            router.createUrlTree([AppRouteSegment.DASHBOARD, 'notfound'])
        );
    });

    it('should return redirect to role dashboard if navigateToRoleDashboard and allowedRole match', async () => {
        mockStore.overrideSelector(selectUserRole, UserRole.PILOT);

        const route = createRouteSnapshot({
            allowedRole: UserRole.PILOT,
            navigateToRoleDashboard: true,
        });

        const result = await executeGuard(route, mockState);

        expect(result).toEqual(
            router.createUrlTree([AppRouteSegment.DASHBOARD, 'pilot'])
        );
    });

    it('should return true if allowedRole matches currentRole and no redirect is needed', async () => {
        mockStore.overrideSelector(selectUserRole, UserRole.OFFICE);

        const route = createRouteSnapshot({
            allowedRole: UserRole.OFFICE,
            navigateToRoleDashboard: false,
        });

        const result = await executeGuard(route, mockState);

        expect(result).toBe(true);
    });
});
