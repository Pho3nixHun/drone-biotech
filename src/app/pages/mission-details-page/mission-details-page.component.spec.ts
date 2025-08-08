import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MissionDetailsPageComponent } from './mission-details-page.component';
import { missionDetailsPageVM } from './mission-details-page.mock';
import {
    provideMissionDetailsPageMockService,
    updateVMSubject,
} from './mission-details-page-mock.service';

describe('MissionDetailsPageComponent', () => {
    let compiled: HTMLElement;
    let fixture: ComponentFixture<MissionDetailsPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MissionDetailsPageComponent],
            providers: [provideMissionDetailsPageMockService()],
        }).compileComponents();

        fixture = TestBed.createComponent(MissionDetailsPageComponent);
        compiled = fixture.debugElement.nativeElement;
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
