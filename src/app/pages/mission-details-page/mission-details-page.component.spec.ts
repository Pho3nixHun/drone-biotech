import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MissionDetailsPageComponent } from './mission-details-page.component';
import { updateVMSubject } from './mission-details-page.service';
import {
    missionDetailsPageVM,
    mockVMWithEntryPoints,
    mockVMWithoutEntryPoints,
    mockVMWithoutTargetAreas,
    mockVMWithTargetAreas,
} from './mission-details-page.mock';

describe('MissionDetailsPageComponent', () => {
    let compiled: HTMLElement;
    let component: MissionDetailsPageComponent;
    let fixture: ComponentFixture<MissionDetailsPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MissionDetailsPageComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(MissionDetailsPageComponent);
        compiled = fixture.debugElement.nativeElement;
        component = fixture.componentInstance;
    });
    // Unit testing
    it('should not set the drawnPolygons if there are no target areas', () => {
        // Arrange
        updateVMSubject(mockVMWithoutTargetAreas);

        // Act
        fixture.detectChanges();

        // Assert
        expect(component['drawnPolygons']()).toBeFalsy();
    });
    // Unit testing
    it('should set the drawnPolygons if there are target areas', () => {
        // Arrange
        updateVMSubject(mockVMWithTargetAreas);

        // Act
        fixture.detectChanges();

        // Assert
        expect(component['drawnPolygons']()).toBeTruthy();
    });
    // Unit testing
    it('should not set the entryPoints if there are no entry points', () => {
        // Arrange
        updateVMSubject(mockVMWithoutEntryPoints);

        // Act
        fixture.detectChanges();

        // Assert
        expect(component['drawnEntryPoints']()).toBeFalsy();
    });
    // Unit testing
    it('should set the entryPoints if there are entry points', () => {
        // Arrange
        updateVMSubject(mockVMWithEntryPoints);

        // Act
        fixture.detectChanges();

        // Assert
        expect(component['drawnEntryPoints']()).toBeTruthy();
    });
    // Snapshot testing
    it('should render the template correctly', () => {
        // Arrange
        updateVMSubject(missionDetailsPageVM);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});
