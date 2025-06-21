import { TestBed } from '@angular/core/testing';
import {
    CanActivateChildFn,
    CanActivateFn,
    provideRouter,
    Router,
} from '@angular/router';
import { redirectChildGuard, redirectGuard } from './dashboard-redirect.guard';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectUserRole } from '@stores/auth/auth.selector';
import { selectURL } from '@stores/router/router.selectors';
import { AppRouteSegment } from 'src/app/app-route-segment';
import { Component } from '@angular/core';

@Component({ selector: 'app-dummy' })
class DummyComponent {}

describe('redirectGuard', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mockRoute = {} as any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mockState = {} as any;
    let mockStore: MockStore;
    let router: Router;

    const executeGuard: CanActivateFn = (...guardParameters) =>
        TestBed.runInInjectionContext(() => redirectGuard(...guardParameters));

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideMockStore()],
        });
        mockStore = TestBed.inject(MockStore);
        router = TestBed.inject(Router);
    });

    it('should be created', () => {
        expect(executeGuard).toBeTruthy();
    });

    it('should return false if there is no role', async () => {
        mockStore.overrideSelector(selectUserRole, undefined);
        const result = await executeGuard(mockRoute, mockState);
        expect(result).toBe(false);
    });

    // Unit testing
    it('should navigate to the specified route', async () => {
        // Arrange
        const role = 'customer';
        const routerSpy = jest.spyOn(router, 'navigate');
        mockStore.overrideSelector(selectUserRole, role);
        mockStore.overrideSelector(selectURL, `/${AppRouteSegment.DASHBOARD}`);

        // Act
        await executeGuard(mockRoute, mockState);

        // Assert

        expect(routerSpy).toHaveBeenCalledWith([
            AppRouteSegment.DASHBOARD,
            role,
        ]);
    });

    // Unit testing
    it('should return true if there is a role', async () => {
        // Arrange
        const role = 'pilot';
        mockStore.overrideSelector(selectUserRole, role);

        // Act
        const result = await executeGuard(mockRoute, mockState);

        // Assert

        expect(result).toBe(true);
    });
});

describe('redirectChildGuard', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mockRoute = { routeConfig: { path: 'customer' } } as any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mockState = {} as any;
    let mockStore: MockStore;
    let router: Router;

    const executeGuard: CanActivateChildFn = (...guardParameters) =>
        TestBed.runInInjectionContext(() =>
            redirectChildGuard(...guardParameters)
        );

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideMockStore(),
                provideRouter([
                    { path: 'dashboard/pilot', component: DummyComponent },
                ]),
            ],
        });
        mockStore = TestBed.inject(MockStore);
        router = TestBed.inject(Router);
    });

    it('should be created', () => {
        expect(executeGuard).toBeTruthy();
    });

    // Unit testing
    it('should return false if there is no role or routeConfig', async () => {
        // Arrange
        mockStore.overrideSelector(selectUserRole, undefined);

        // Act
        const result = await executeGuard(mockRoute, mockState);

        // Assert
        expect(result).toBe(false);
    });

    // Unit testing
    it('should return true if there is a role and routeConfig', async () => {
        // Arrange
        mockStore.overrideSelector(selectUserRole, 'customer');

        // Act
        const result = await executeGuard(mockRoute, mockState);

        // Assert
        expect(result).toBe(true);
    });

    // Unit testing
    it('should not route to the specified location if the path and the role are equal', async () => {
        // Arrange
        const role = 'customer';
        mockStore.overrideSelector(selectUserRole, role);
        const routerSpy = jest.spyOn(router, 'navigate');

        // Act
        await executeGuard(mockRoute, mockState);

        // Assert
        expect(routerSpy).toHaveBeenCalledTimes(0);
    });

    // Unit testing
    it('should route to the specified location if the path and the role are not equal', async () => {
        // Arrange
        const role = 'pilot';
        const routerSpy = jest.spyOn(router, 'navigate');
        mockStore.overrideSelector(selectUserRole, role);

        // Act
        await executeGuard(mockRoute, mockState);

        // Assert

        expect(routerSpy).toHaveBeenCalledWith([
            AppRouteSegment.DASHBOARD,
            role,
        ]);
    });
});
