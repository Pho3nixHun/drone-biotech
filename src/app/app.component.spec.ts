import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { getTranslocoModule } from 'transloco-testing.module';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { provideRouter, Router } from '@angular/router';
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
import { AppRouteSegment } from './app-route-segment';
import { routes } from './app.routes';
import {
    provideAuthGuard,
    updateAuthenticated,
} from './shared/guards/auth/auth.guard.mock';
import {
    provideLoginGuard,
    updateLoggedIn,
} from './shared/guards/login/login.guard.mock';
import { Auth } from '@angular/fire/auth';
import { of } from 'rxjs';
import { AuthActions } from './stores/auth/auth.actions';
import { selectHeaderCanBeShown } from './stores/router/router.selectors';

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
                provideAuthGuard(),
                provideLoginGuard(),
                provideRouter(routes),
                provideMockStore(),
                { provide: Auth, useValue: of(null) },
            ],
        }).compileComponents();

        updateGetVMSignal(undefined);
        updateAuthenticated(false);
        updateLoggedIn(false);
        router = TestBed.inject(Router);
        store = TestBed.inject(MockStore);
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        compiled = fixture.debugElement.nativeElement;
    });

    it(`should not render the template when the VM is not provided`, () => {
        //Arrange
        //No need for arrange

        //Act
        //No need for act

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
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
        store.overrideSelector(selectHeaderCanBeShown, false);
        updateGetVMSignal(appMockVM);

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it(`should render the <app-header> when the headerCanBeShown$ value is true`, () => {
        //Arrange
        store.overrideSelector(selectHeaderCanBeShown, true);
        updateGetVMSignal(appMockVM);

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it(`should not render <app-nav-item> when there is no item provided`, () => {
        //Arrange
        store.overrideSelector(selectHeaderCanBeShown, true);
        updateGetVMSignal(appMockVMWithoutNavItem);

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it(`should render 1 <app-nav-item> when 1 item is provided`, () => {
        //Arrange
        store.overrideSelector(selectHeaderCanBeShown, true);
        updateGetVMSignal(appMockVMWithOneNavItem);

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });
    //Snapshot test
    it(`should render 5 <app-nav-item> in order when 5 items are provided`, () => {
        //Arrange
        store.overrideSelector(selectHeaderCanBeShown, true);
        updateGetVMSignal(appMockVMWithFiveNavItem);

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it(`should render 1 <a> with routerLink when 1 item is provided`, () => {
        //Arrange
        store.overrideSelector(selectHeaderCanBeShown, true);
        updateGetVMSignal(appMockVMWithOneAnchor);

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });
    //Snapshot test
    it(`should render 5 <a> with routerLink in order when 5 items are provided`, () => {
        //Arrange
        store.overrideSelector(selectHeaderCanBeShown, true);
        updateGetVMSignal(appMockVMWithFiveAnchor);

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });
    //Snapshot test
    it(`should render <app-nav-item> and <a> with routerLink in order when both of them are provided`, () => {
        //Arrange
        store.overrideSelector(selectHeaderCanBeShown, true);
        updateGetVMSignal(appMockVMWithNavItemAndAnchor);

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should navigate back to the LoginPage after navigate to "" because the user is not logged in', async () => {
        //Arrange
        store.overrideSelector(selectHeaderCanBeShown, false);
        updateGetVMSignal(appEmptyMockVMForRoutes);

        //Act
        await router.navigate(['']);
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should navigate back to the LoginPage after navigate to "/products" because the user is not logged in', async () => {
        //Arrange
        store.overrideSelector(selectHeaderCanBeShown, false);
        updateGetVMSignal(appEmptyMockVMForRoutes);

        //Act
        await router.navigate([AppRouteSegment.PRODUCT]);
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should navigate back to the LoginPage after navigate to "/products/id" because the user is not logged in', async () => {
        //Arrange
        store.overrideSelector(selectHeaderCanBeShown, false);
        updateGetVMSignal(appEmptyMockVMForRoutes);

        //Act
        await router.navigate([AppRouteSegment.PRODUCT, 'id']);
        fixture.detectChanges();
        //Assert
        expect(compiled).toMatchSnapshot();
    });

    it('can navigate to the to "" because the user is logged in so it should render the LandingPage', async () => {
        //Arrange
        store.overrideSelector(selectHeaderCanBeShown, true);
        updateGetVMSignal(appEmptyMockVMForRoutes);
        updateAuthenticated(true);
        updateLoggedIn(true);

        //Act
        await router.navigate(['']);
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('can navigate to the to "/products" because the user is logged in so it should render the ProductsPage', async () => {
        //Arrange
        store.overrideSelector(selectHeaderCanBeShown, true);
        updateGetVMSignal(appEmptyMockVMForRoutes);
        updateAuthenticated(true);
        updateLoggedIn(true);

        //Act
        await router.navigate([AppRouteSegment.PRODUCT]);
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    it('can navigate to the to "/products/id" because the user is logged in so it should render the ProductsPage', async () => {
        //Arrange
        store.overrideSelector(selectHeaderCanBeShown, true);
        updateGetVMSignal(appEmptyMockVMForRoutes);
        updateAuthenticated(true);
        updateLoggedIn(true);

        //Act
        await router.navigate([AppRouteSegment.PRODUCT, 'id']);
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    it('should call signOut function when the button is clicked', () => {
        //Arrange
        store.overrideSelector(selectHeaderCanBeShown, true);
        updateGetVMSignal(appEmptyMockVMForRoutes);
        const signOutSpy = jest.spyOn(component, 'signOut');

        //Act
        fixture.detectChanges();
        const button = fixture.nativeElement.querySelector(
            'button[mat-icon-button]'
        );
        button.click();

        //Assert
        expect(signOutSpy).toHaveBeenCalled();
    });

    it('should dispatch signOut action when signOut function is called', () => {
        //Arrange
        store.overrideSelector(selectHeaderCanBeShown, true);
        const storeSpy = jest.spyOn(store, 'dispatch');

        //Act
        component.signOut();

        //Assert
        expect(storeSpy).toHaveBeenCalledWith(AuthActions.signOut());
    });
});
