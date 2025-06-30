import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OfficeDashboardPageComponent } from './office-dashboard-page.component';
import { getTranslocoModule } from 'transloco-testing.module';
import { provideRouter } from '@angular/router';
import { OFFICE_DASHBOARD_PAGE_CONFIG } from './office-dashboard-page.config';
import {
    enMock,
    officeDashboardPageConfigMock,
    oneActiveMission,
    oneCompletedMission,
    threeActiveMissions,
    threeCompletedMissions,
} from './office-dashboard-page.mock';
import {
    provideMissionMockService,
    updateMissions,
} from '@services/mission/mission-mock.service';
import { OfficeDashboardPageService } from './office-dashboard-page.service';

describe('OfficeDashboardPageComponent', () => {
    let fixture: ComponentFixture<OfficeDashboardPageComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                OfficeDashboardPageComponent,
                getTranslocoModule({
                    langs: { en: enMock },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
            providers: [
                OfficeDashboardPageService,
                provideMissionMockService(),
                provideRouter([]),
                {
                    provide: OFFICE_DASHBOARD_PAGE_CONFIG,
                    useValue: officeDashboardPageConfigMock,
                },
            ],
        }).compileComponents();
    });

    // Snapshot testing
    it('should render one active mission if one active mission is provided', () => {
        // Arrange
        updateMissions([oneActiveMission]);

        fixture = TestBed.createComponent(OfficeDashboardPageComponent);
        compiled = fixture.debugElement.nativeElement;

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render three active missions', () => {
        // Arrange
        updateMissions([threeActiveMissions]);

        fixture = TestBed.createComponent(OfficeDashboardPageComponent);
        compiled = fixture.debugElement.nativeElement;

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render one completed mission', () => {
        // Arrange
        updateMissions([oneCompletedMission]);

        fixture = TestBed.createComponent(OfficeDashboardPageComponent);
        compiled = fixture.debugElement.nativeElement;

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render three completed missions', () => {
        // Arrange
        updateMissions([threeCompletedMissions]);

        fixture = TestBed.createComponent(OfficeDashboardPageComponent);
        compiled = fixture.debugElement.nativeElement;

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});
