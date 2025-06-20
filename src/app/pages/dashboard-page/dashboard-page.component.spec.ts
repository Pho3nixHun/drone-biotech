import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardPageComponent } from './dashboard-page.component';
import { getTranslocoModule } from 'transloco-testing.module';
import { provideRouter } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectUser } from '@stores/auth/auth.selector';
import { DASHBOARD_PAGE_CONFIG } from './dashboard-page.config';
import { dashboardPageConfigMock } from './dashboard-page.mock';

describe('DashboardPageComponent', () => {
    let fixture: ComponentFixture<DashboardPageComponent>;
    let compiled: HTMLElement;
    let mockStore: MockStore;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                DashboardPageComponent,
                getTranslocoModule({
                    langs: {},
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
            providers: [
                {
                    provide: DASHBOARD_PAGE_CONFIG,
                    useValue: dashboardPageConfigMock,
                },
                provideRouter([]),
                provideMockStore({
                    selectors: [{ selector: selectUser, value: null }],
                }),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(DashboardPageComponent);
        mockStore = TestBed.inject(MockStore);
        compiled = fixture.debugElement.nativeElement;
    });

    // Snapshot testing
    it('should not render the template if there is no user', () => {
        // There is no need to arrange

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the template correctly if there is a user', () => {
        // There is no need to arrange
        mockStore.overrideSelector(selectUser, {
            uid: 'id',
            displayName: 'Cristiano Ronaldo',
            email: 'test@gmail.com',
            name: 'Name',
            photoURL: 'url',
            role: 'customer',
        });

        // Act
        mockStore.refreshState();
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});
