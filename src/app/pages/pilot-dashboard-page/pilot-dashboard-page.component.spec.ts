import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PilotDashboardPageComponent } from './pilot-dashboard-page.component';
import { getTranslocoModule } from 'transloco-testing.module';
import { provideRouter } from '@angular/router';
import {
    providePilotDashboardPageMockService,
    updateVMSubject,
} from './pilot-dashboard-page-mock.service';
import {
    enMock,
    mockVM,
    mockVMWithOneExcellentCompletedMissionXVM,
    mockVMWithOneGoodCompletedMissionXVM,
    mockVMWithOneGridXVM,
    mockVMWithOneHeaderKeyInGridXVM,
    mockVMWithOneMissionXVM,
    mockVMWithOnePreparingAssignedMissionXVM,
    mockVMWithOneScheduledAssignedMissionXVM,
    mockVMWithoutGridXVM,
    mockVMWithoutHeaderKeysInGridXVM,
    mockVMWithoutMissionXVM,
    mockVMWithThreeGridXVM,
    mockVMWithThreeHeaderKeysInGridXVM,
    mockVMWithThreeMissionXVM,
} from './pilot-dashboard-page.mock';

describe('PilotDashboardPageComponent', () => {
    let fixture: ComponentFixture<PilotDashboardPageComponent>;
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
                providePilotDashboardPageMockService(),
            ],
        }).compileComponents();
        fixture = TestBed.createComponent(PilotDashboardPageComponent);
        compiled = fixture.debugElement.nativeElement;
    });

    // Snapshot testing
    it('should not render the template when the vm is not provided', () => {
        // Arrange
        updateVMSubject(undefined);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template when the vm is provided', () => {
        // Arrange
        updateVMSubject(mockVM);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render 0 gridXVM if 0 is provided in the vm', () => {
        // Arrange
        updateVMSubject(mockVMWithoutGridXVM);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render 1 gridXVM if 1 is provided in the vm', () => {
        // Arrange
        updateVMSubject(mockVMWithOneGridXVM);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render 3 gridXVM if 3 is provided in the vm', () => {
        // Arrange
        updateVMSubject(mockVMWithThreeGridXVM);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render 0 header key in the grid if 0 is provided in the vm', () => {
        // Arrange
        updateVMSubject(mockVMWithoutHeaderKeysInGridXVM);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render 1 header key in the grid if 1 is provided in the vm', () => {
        // Arrange
        updateVMSubject(mockVMWithOneHeaderKeyInGridXVM);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render 3 header key in the grid if 3 is provided in the vm', () => {
        // Arrange
        updateVMSubject(mockVMWithThreeHeaderKeysInGridXVM);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render 0 mission if 0 is provided in the vm', () => {
        // Arrange
        updateVMSubject(mockVMWithoutMissionXVM);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render 1 mission if 1 is provided in the vm', () => {
        // Arrange
        updateVMSubject(mockVMWithOneMissionXVM);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render 3 mission if 3 is provided in the vm', () => {
        // Arrange
        updateVMSubject(mockVMWithThreeMissionXVM);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render 1 assigned mission with scheduled status if 1 is provided in the vm', () => {
        // Arrange
        updateVMSubject(mockVMWithOneScheduledAssignedMissionXVM);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render 1 assigned mission with preparing status if 1 is provided in the vm', () => {
        // Arrange
        updateVMSubject(mockVMWithOnePreparingAssignedMissionXVM);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render 1 completed mission with excellent performance if 1 is provided in the vm', () => {
        // Arrange
        updateVMSubject(mockVMWithOneExcellentCompletedMissionXVM);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render 1 completed mission with good performance if 1 is provided in the vm', () => {
        // Arrange
        updateVMSubject(mockVMWithOneGoodCompletedMissionXVM);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});
