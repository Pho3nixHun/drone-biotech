import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderDetailsPageComponent } from './order-details-page.component';
import { ORDER_DETAILS_PAGE_CONFIG } from './order-details-page.config';
import { enMock, orderDetailsPageMockConfig } from './order-details-page.mock';
import { getTranslocoModule } from 'transloco-testing.module';
import { provideMockAuthStore } from '@stores/auth/auth.testing';

describe('OrderDetailsPageComponent', () => {
    let fixture: ComponentFixture<OrderDetailsPageComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                OrderDetailsPageComponent,
                getTranslocoModule({
                    langs: { en: enMock },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
            providers: [
                {
                    provide: ORDER_DETAILS_PAGE_CONFIG,
                    useValue: orderDetailsPageMockConfig,
                },
                provideMockAuthStore(),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(OrderDetailsPageComponent);
        compiled = fixture.debugElement.nativeElement;
    });

    // Snapshot testing
    it('should render the template correctly', () => {
        // Arrange

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});
