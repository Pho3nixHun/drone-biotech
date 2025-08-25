import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { getTranslocoModule } from 'transloco-testing.module';
import { routes } from './app.routes';
import {
    enAppMock,
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
import { provideAuthenticatedUserGuard } from '@guards/authenticated-user/authenticated-user.guard.mock';
import { provideGuestOnlyGuard } from '@guards/guest-only/guest-only.guard.mock';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectHeaderCanBeShown } from '@stores/router/router.selectors';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let compiled: HTMLElement;
    let mockStore: MockStore;
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
                        { selector: selectHeaderCanBeShown, value: false },
                    ],
                }),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        mockStore = TestBed.inject(MockStore);
        compiled = fixture.debugElement.nativeElement;
    });

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
        mockStore.overrideSelector(selectHeaderCanBeShown, true);
        updateGetVMSignal(appMockVM);

        //Act
        mockStore.refreshState();
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it(`should not render the <app-header> when the headerCanBeShown$ value is false`, () => {
        //Arrange
        mockStore.overrideSelector(selectHeaderCanBeShown, false);
        updateGetVMSignal(appMockVM);

        //Act
        mockStore.refreshState();
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it(`should render the <app-header> when the headerCanBeShown$ value is true`, () => {
        //Arrange
        mockStore.overrideSelector(selectHeaderCanBeShown, true);
        updateGetVMSignal(appMockVM);

        //Act
        mockStore.refreshState();
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it(`should not render <app-nav-item> when there is no item provided`, () => {
        //Arrange
        mockStore.overrideSelector(selectHeaderCanBeShown, true);
        updateGetVMSignal(appMockVMWithoutNavItem);

        //Act
        mockStore.refreshState();
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it(`should render 1 <app-nav-item> when 1 item is provided`, () => {
        //Arrange
        mockStore.overrideSelector(selectHeaderCanBeShown, true);
        updateGetVMSignal(appMockVMWithOneNavItem);

        //Act
        mockStore.refreshState();
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });
    //Snapshot test
    it(`should render 5 <app-nav-item> in order when 5 items are provided`, () => {
        //Arrange
        mockStore.overrideSelector(selectHeaderCanBeShown, true);
        updateGetVMSignal(appMockVMWithFiveNavItem);

        //Act
        mockStore.refreshState();
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it(`should render 1 <a> with routerLink when 1 item is provided`, () => {
        //Arrange
        mockStore.overrideSelector(selectHeaderCanBeShown, true);
        updateGetVMSignal(appMockVMWithOneAnchor);

        //Act
        mockStore.refreshState();
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });
    //Snapshot test
    it(`should render 5 <a> with routerLink in order when 5 items are provided`, () => {
        //Arrange
        mockStore.overrideSelector(selectHeaderCanBeShown, true);
        updateGetVMSignal(appMockVMWithFiveAnchor);

        //Act
        mockStore.refreshState();
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });
    //Snapshot test
    it(`should render <app-nav-item> and <a> with routerLink in order when both of them are provided`, () => {
        //Arrange
        mockStore.overrideSelector(selectHeaderCanBeShown, true);
        updateGetVMSignal(appMockVMWithNavItemAndAnchor);

        //Act
        mockStore.refreshState();
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });
});
