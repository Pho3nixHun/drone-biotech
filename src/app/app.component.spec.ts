import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { provideRouter, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { getTranslocoModule } from 'transloco-testing.module';
import { AuthActions } from './stores/auth/auth.actions';
import { selectHeaderCanBeShown } from './stores/router/router.selectors';
import { AppRouteSegment } from './app-route-segment';
import { routes } from './app.routes';
import {
    enAppMock,
    appEmptyMockVMForRoutes,
    appMockVM,
    appMockVMWithFiveNavItem,
    appMockVMWithOneNavItem,
    appMockVMWithoutNavItem,
    appMockVMWithOneAnchor,
    appMockVMWithFiveAnchor,
    appMockVMWithNavItemAndAnchor,
} from './app.mock';
import {
    provideAppComponentMockService,
    updateGetVMSignal,
} from './app-service.mock';
import {
    provideAuthenticatedUserGuard,
    updateAuthenticatedUserGuard,
} from '@guards/authenticated-user/authenticated-user.guard.mock';
import {
    provideGuestOnlyGuard,
    updateGuestOnlyGuard,
} from '@guards/guest-only/guest-only.guard.mock';
import { OrdersRouteSegment } from './pages/orders-new-page/orders-route-segment';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;
    let compiled: HTMLElement;
    let router: Router;
    let store: MockStore;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                AppComponent,
                getTranslocoModule({
                    langs: { en: enAppMock },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
            providers: [
                provideAppComponentMockService(),
                provideRouter(routes),
                provideGuestOnlyGuard(),
                provideAuthenticatedUserGuard(),
                provideMockStore({
                    selectors: [
                        { selector: selectHeaderCanBeShown, value: true },
                    ],
                }),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        router = TestBed.inject(Router);
        store = TestBed.inject(MockStore);
        compiled = fixture.debugElement.nativeElement;
        component = fixture.componentInstance;
    });

    describe('when rendering the UI', () => {
        // Snapshot testing
        it(`should not render the template when the VM is not provided`, () => {
            //Arrange
            updateGetVMSignal(undefined);

            //Act
            fixture.detectChanges();

            //Assert
            expect(compiled).toMatchSnapshot();
        });

        //Snapshot testing
        it(`should render the template when the VM is provided`, () => {
            //Arrange
            updateGetVMSignal(appMockVM);

            //Act
            fixture.detectChanges();

            //Assert
            expect(compiled).toMatchSnapshot();
        });

        //Snapshot test
        it(`should not render the <app-header> when the headerCanBeShown$ value is false`, () => {
            //Arrange
            store.overrideSelector(selectHeaderCanBeShown, true);
            updateGetVMSignal(appMockVM);

            //Act
            store.refreshState();
            fixture.detectChanges();

            //Assert
            expect(compiled).toMatchSnapshot();
        });

        //Snapshot test
        it(`should render the <app-header> when the headerCanBeShown$ value is true`, () => {
            //Arrange
            updateGetVMSignal(appMockVM);

            //Act
            fixture.detectChanges();

            //Assert
            expect(compiled).toMatchSnapshot();
        });

        //Snapshot test
        it(`should not render <app-nav-item> when there is no item provided`, () => {
            //Arrange
            updateGetVMSignal(appMockVMWithoutNavItem);

            //Act
            fixture.detectChanges();

            //Assert
            expect(compiled).toMatchSnapshot();
        });

        //Snapshot test
        it(`should render 1 <app-nav-item> when 1 item is provided`, () => {
            //Arrange
            updateGetVMSignal(appMockVMWithOneNavItem);

            //Act
            fixture.detectChanges();

            //Assert
            expect(compiled).toMatchSnapshot();
        });
        //Snapshot test
        it(`should render 5 <app-nav-item> in order when 5 items are provided`, () => {
            //Arrange
            updateGetVMSignal(appMockVMWithFiveNavItem);

            //Act
            fixture.detectChanges();

            //Assert
            expect(compiled).toMatchSnapshot();
        });

        //Snapshot test
        it(`should render 1 <a> with routerLink when 1 item is provided`, () => {
            //Arrange
            updateGetVMSignal(appMockVMWithOneAnchor);

            //Act
            fixture.detectChanges();

            //Assert
            expect(compiled).toMatchSnapshot();
        });
        //Snapshot test
        it(`should render 5 <a> with routerLink in order when 5 items are provided`, () => {
            //Arrange
            updateGetVMSignal(appMockVMWithFiveAnchor);

            //Act
            fixture.detectChanges();

            //Assert
            expect(compiled).toMatchSnapshot();
        });
        //Snapshot test
        it(`should render <app-nav-item> and <a> with routerLink in order when both of them are provided`, () => {
            //Arrange
            updateGetVMSignal(appMockVMWithNavItemAndAnchor);

            //Act
            fixture.detectChanges();

            //Assert
            expect(compiled).toMatchSnapshot();
        });
    });

    describe('when the user is logged in', () => {
        beforeEach(() => {
            updateAuthenticatedUserGuard(true);
            updateGuestOnlyGuard(true);
        });

        //Unit testing
        it('can navigate to LandingPage', async () => {
            //Arrange

            //Act
            await router.navigate([AppRouteSegment.LANDING]);

            //Assert
            expect(router.url).toBe(`/${AppRouteSegment.LANDING}`);
        });

        //Unit testing
        it('can navigate to "/products"', async () => {
            //Arrange

            //Act
            await router.navigate([AppRouteSegment.PRODUCT]);

            //Assert
            expect(router.url).toBe(`/${AppRouteSegment.PRODUCT}`);
        });

        //Unit testing
        it('can navigate to "/products/id"', async () => {
            //Arrange

            //Act
            await router.navigate([AppRouteSegment.PRODUCT, 'id']);

            //Assert
            expect(router.url).toBe(`/${AppRouteSegment.PRODUCT}/id`);
        });

        //Unit testing
        it('can navigate to "/orders/new"', async () => {
            //Arrange

            //Act
            await router.navigate([
                AppRouteSegment.ORDERS,
                OrdersRouteSegment.NEW,
            ]);

            //Assert
            expect(router.url).toBe(
                `/${AppRouteSegment.ORDERS}/${OrdersRouteSegment.NEW}`
            );
        });

        //Interaction test
        it('should call signOut function when the button is clicked', () => {
            //Arrange
            updateGetVMSignal(appEmptyMockVMForRoutes);
            const signOutSpy = jest.spyOn(component, 'signOut');

            //Act
            fixture.detectChanges();
            fixture.nativeElement
                .querySelector('button[mat-icon-button]')
                .click();

            //Assert
            expect(signOutSpy).toHaveBeenCalled();
        });

        //Unit test
        it('should dispatch signOut action when signOut function is called', () => {
            //Arrange
            const storeSpy = jest.spyOn(store, 'dispatch');

            //Act
            component.signOut();

            //Assert
            expect(storeSpy).toHaveBeenCalledWith(AuthActions.signOut());
        });
    });

    describe('when the user is not logged in', () => {
        beforeEach(() => {
            updateAuthenticatedUserGuard(false);
            updateGuestOnlyGuard(false);
        });

        //Unit test
        it('should navigate back to the LoginPage after navigate to "/orders/new"', async () => {
            //Arrange

            //Act
            await router.navigate([
                AppRouteSegment.ORDERS,
                OrdersRouteSegment.NEW,
            ]);

            //Assert
            expect(router.url).toBe(`/${AppRouteSegment.LOGIN}`);
        });
    });
});
