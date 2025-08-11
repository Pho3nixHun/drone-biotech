import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardPageComponent } from './dashboard-page.component';
import { getTranslocoModule } from 'transloco-testing.module';
import { provideRouter } from '@angular/router';
import {
    provideDashboardPageMockService,
    updateVMSubject,
} from './dashboard-page-mock.service';
import {
    enMock,
    mockVM,
    mockVMWithAllSummaryTypes,
    mockVMWithCustomer,
    mockVMWithOffice,
    mockVMWithOneSummary,
    mockVMWithoutSummary,
    mockVMWithPilot,
    mockVMWithThreeSummary,
} from './dashboard-page.mock';

describe('DashboardPageComponent', () => {
    let fixture: ComponentFixture<DashboardPageComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                DashboardPageComponent,
                getTranslocoModule({
                    langs: { en: enMock },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
            providers: [provideRouter([]), provideDashboardPageMockService()],
        }).compileComponents();

        fixture = TestBed.createComponent(DashboardPageComponent);
        compiled = fixture.debugElement.nativeElement;
    });

    // Snapshot testing
    it('should not render the template if there is no vm', () => {
        // Arrange
        updateVMSubject(null);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the template correctly if there is a vm provided', () => {
        // Arrange
        updateVMSubject(mockVM);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if the user is customer', () => {
        // Arrange
        updateVMSubject(mockVMWithCustomer);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if the user is somebody from the office', () => {
        // Arrange
        updateVMSubject(mockVMWithOffice);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if the user is pilot', () => {
        // Arrange
        updateVMSubject(mockVMWithPilot);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if there is no summary', () => {
        // Arrange
        updateVMSubject(mockVMWithoutSummary);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if there is 1 summary', () => {
        // Arrange
        updateVMSubject(mockVMWithOneSummary);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if there are 3 summaries', () => {
        // Arrange
        updateVMSubject(mockVMWithThreeSummary);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template correctly if there are different types of summaries', () => {
        // Arrange
        updateVMSubject(mockVMWithAllSummaryTypes);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});
