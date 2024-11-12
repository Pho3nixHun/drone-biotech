import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { getTranslocoModule } from 'transloco-testing.module';
import { provideRouter, Router } from '@angular/router';
import {
    appEmptyMockVMForRoutes,
    appMockVM,
    appMockVMWithFiveNavItem,
    appMockVMWithOneNavItem,
    appMockVMWithoutNavItem,
    enAppMock,
} from './app.mock';
import {
    provideAppComponentMockService,
    updateGetVMSignal,
} from './app-service.mock';
import { routes } from './app.routes';
import { AppRouteSegment } from './app-route-segment';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let compiled: HTMLElement;
    let router: Router;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                AppComponent,
                getTranslocoModule({
                    langs: { enAppMock },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
            providers: [
                provideAppComponentMockService(),
                provideRouter(routes),
            ],
        }).compileComponents();

        updateGetVMSignal(undefined);
        router = TestBed.inject(Router);
        fixture = TestBed.createComponent(AppComponent);
        compiled = fixture.debugElement.nativeElement;
    });

    //Snapshot test
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
    it('should navigate to "" and render the LandingPageComponent', async () => {
        //Arrange
        updateGetVMSignal(appEmptyMockVMForRoutes);

        //Act
        await router.navigate(['']);
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should navigate to "/products" and render the ProductsPageComponent', async () => {
        //Arrange
        updateGetVMSignal(appEmptyMockVMForRoutes);

        //Act
        await router.navigate([AppRouteSegment.PRODUCT]);
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should navigate to "/products/id" and render the ProductsPageComponent', async () => {
        //Arrange
        updateGetVMSignal(appEmptyMockVMForRoutes);

        //Act
        await router.navigate([AppRouteSegment.PRODUCT, 'id']);
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });
});
