import {
    enMock,
    oneActiveMission,
    oneCompletedMission,
    pilotDashboardPageConfigMock,
    threeActiveMissions,
    threeCompletedMissions,
} from './pilot-dashboard-page.mock';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PilotDashboardPageComponent } from './pilot-dashboard-page.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectUserName } from '@stores/auth/auth.selector';
import { getTranslocoModule } from 'transloco-testing.module';
import { provideRouter } from '@angular/router';
import {
    provideMissionMockService,
    updateMissions,
} from '@services/mission/mission-mock.service';
import { PILOT_DASHBOARD_PAGE_CONFIG } from './pilot-dashboard-page.config';

describe('PilotDashboardPageComponent', () => {
    let fixture: ComponentFixture<PilotDashboardPageComponent>;
    let mockStore: MockStore;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                PilotDashboardPageComponent,
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
                {
                    provide: PILOT_DASHBOARD_PAGE_CONFIG,
                    useValue: pilotDashboardPageConfigMock,
                },
                provideMissionMockService(),
                provideMockStore({
                    selectors: [{ selector: selectUserName, value: undefined }],
                }),
            ],
        }).compileComponents();
        fixture = TestBed.createComponent(PilotDashboardPageComponent);
        mockStore = TestBed.inject(MockStore);
        compiled = fixture.debugElement.nativeElement;
    });

    // Snapshot testing
    it('should not render the template when there is no user', () => {
        // Arrange
        mockStore.overrideSelector(selectUserName, undefined);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the template when there is a user provided', () => {
        // Arrange
        mockStore.overrideSelector(selectUserName, 'Alex Rodriguez');

        // Act
        mockStore.refreshState();
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should not render the grids if there is no mission for the pilot', () => {
        // Arrange
        mockStore.overrideSelector(selectUserName, 'Alex Rodriguez');
        updateMissions([]);

        // Act
        mockStore.refreshState();
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render one active mission if one active mission is provided for the pilot', () => {
        // Arrange
        mockStore.overrideSelector(selectUserName, 'Alex Rodriguez');
        updateMissions([oneActiveMission]);

        // Act
        mockStore.refreshState();
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render three active missions if three missions are provided for the pilot', () => {
        // Arrange
        mockStore.overrideSelector(selectUserName, 'Alex Rodriguez');
        updateMissions([threeActiveMissions]);

        // Act
        mockStore.refreshState();
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render one completed mission if one completed mission is provided for the pilot', () => {
        // Arrange
        mockStore.overrideSelector(selectUserName, 'Alex Rodriguez');
        updateMissions([oneCompletedMission]);

        // Act
        mockStore.refreshState();
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render three completed missions if three completed missions are provided for the pilot', () => {
        // Arrange
        mockStore.overrideSelector(selectUserName, 'Alex Rodriguez');
        updateMissions([threeCompletedMissions]);

        // Act
        mockStore.refreshState();
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});
