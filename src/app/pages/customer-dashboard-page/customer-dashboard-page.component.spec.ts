import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerDashboardPageComponent } from './customer-dashboard-page.component';
import { getTranslocoModule } from 'transloco-testing.module';
import { provideRouter } from '@angular/router';
import { CUSTOMER_DASHBOARD_PAGE_CONFIG } from './customer-dashboard-page.config';
import {
    customerDashboardPageConfigMock,
    enMock,
    mockOrdersFive,
    mockOrdersTwo,
} from './customer-dashboard-page.mock';
import {
    provideOrderMockService,
    updateOrders,
} from '@services/order/order-mock.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectUserName } from '@stores/auth/auth.selector';
import { mockOrdersFive, mockOrdersTwo } from '@services/order/order-mock';

describe('CustomerDashboardPageComponent', () => {
    let fixture: ComponentFixture<CustomerDashboardPageComponent>;
    let compiled: HTMLElement;
    let mockStore: MockStore;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                CustomerDashboardPageComponent,
                getTranslocoModule({
                    langs: { en: enMock },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
            providers: [
                provideRouter([]),
                provideOrderMockService(),
                {
                    provide: CUSTOMER_DASHBOARD_PAGE_CONFIG,
                    useValue: customerDashboardPageConfigMock,
                },
                provideMockStore({
                    selectors: [{ selector: selectUserName, value: undefined }],
                }),
            ],
        }).compileComponents();

        mockStore = TestBed.inject(MockStore);
    });

    // Snapshot testing
    it('should not render anything if there is no user', () => {
        // Arrange
        mockStore.overrideSelector(selectUserName, undefined);
        updateOrders([]);

        fixture = TestBed.createComponent(CustomerDashboardPageComponent);
        compiled = fixture.debugElement.nativeElement;

        // Act

        mockStore.refreshState();
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if there is a user', () => {
        // Arrange
        mockStore.overrideSelector(selectUserName, 'Raul');
        updateOrders([]);

        fixture = TestBed.createComponent(CustomerDashboardPageComponent);
        compiled = fixture.debugElement.nativeElement;

        // Act

        mockStore.refreshState();
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render two orders', () => {
        // Arrange
        mockStore.overrideSelector(selectUserName, 'Raul');
        updateOrders(mockOrdersTwo);

        fixture = TestBed.createComponent(CustomerDashboardPageComponent);
        compiled = fixture.debugElement.nativeElement;

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render five orders', () => {
        // Arrange
        mockStore.overrideSelector(selectUserName, 'Raul');
        updateOrders(mockOrdersFive);

        fixture = TestBed.createComponent(CustomerDashboardPageComponent);
        compiled = fixture.debugElement.nativeElement;

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});
