import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OfficeDashboardPageComponent } from './office-dashboard-page.component';
import { getTranslocoModule } from 'transloco-testing.module';
import { provideRouter } from '@angular/router';
import {
    provideOfficeDashboardPageMockService,
    updateVMSubject,
} from './office-dashboard-page-mock.service';
import {
    mockVM,
    mockVMWithAllActionTypesInMission,
    mockVMWithAnchorInGridXVM,
    mockVMWithAssignedMission,
    mockVMWithDifferentActiveMissionXVMTypes,
    mockVMWithDifferentCompletedMissionXVMTypes,
    mockVMWithDifferentMissionXVMTypes,
    mockVMWithOneGridXVM,
    mockVMWithOneHeaderKeyInGridXVM,
    mockVMWithOneMissionXVM,
    mockVMWithoutGridXVM,
    mockVMWithoutHeaderKeysInGridXVM,
    mockVMWithoutMissionXVM,
    mockVMWithThreeGridXVM,
    mockVMWithThreeHeaderKeysInGridXVM,
    mockVMWithThreeMissionXVM,
    mockVMWithUnassignedMission,
} from './office-dashboard-page.mock';

describe('OfficeDashboardPageComponent', () => {
    let fixture: ComponentFixture<OfficeDashboardPageComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                OfficeDashboardPageComponent,
                getTranslocoModule({
                    langs: {},
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
            providers: [
                provideOfficeDashboardPageMockService(),
                provideRouter([]),
            ],
        }).compileComponents();
        fixture = TestBed.createComponent(OfficeDashboardPageComponent);
        compiled = fixture.debugElement.nativeElement;
    });

    // Snapshot testing
    it('should not render the template if there is no vm provided', () => {
        // Arrange
        updateVMSubject(null);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template if there is a vm provided', () => {
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
    it('should render the anchor in the grid if it is provided in the vm', () => {
        // Arrange
        updateVMSubject(mockVMWithAnchorInGridXVM);

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
        // Snapshot testing
    });
    it('should render different mission types', () => {
        // Arrange
        updateVMSubject(mockVMWithDifferentMissionXVMTypes);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render all active mission types', () => {
        // Arrange
        updateVMSubject(mockVMWithDifferentActiveMissionXVMTypes);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render all completed mission types', () => {
        // Arrange
        updateVMSubject(mockVMWithDifferentCompletedMissionXVMTypes);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render an assigned mission', () => {
        // Arrange
        updateVMSubject(mockVMWithAssignedMission);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render an assigned mission', () => {
        // Arrange
        updateVMSubject(mockVMWithUnassignedMission);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render all the action types in a mission', () => {
        // Arrange
        updateVMSubject(mockVMWithAllActionTypesInMission);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});
