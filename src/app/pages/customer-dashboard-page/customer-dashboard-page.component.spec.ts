import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerDashboardPageComponent } from './customer-dashboard-page.component';
import { getTranslocoModule } from 'transloco-testing.module';
import { provideRouter } from '@angular/router';
import {
    enMock,
    mockVM,
    mockVMWithAnchorInGridXVM,
    mockVMWithOneCompanyOrderXVM,
    mockVMWithOneGridXVM,
    mockVMWithOneHeaderKeyInGridXVM,
    mockVMWithOneMyOrderXVM,
    mockVMWithOneOrderXVM,
    mockVMWithOrderXVMsWithAllStatusTypes,
    mockVMWithoutAnchorInGridXVM,
    mockVMWithoutGridXVM,
    mockVMWithoutHeaderKeysInGridXVM,
    mockVMWithoutOrderXVM,
    mockVMWithThreeGridXVM,
    mockVMWithThreeHeaderKeysInGridXVM,
    mockVMWithThreeOrderXVM,
} from './customer-dashboard-page.mock';
import {
    provideCustomerDashboardPageMockService,
    updateVMSubject,
} from './customer-dashboard-page-mock.service';

describe('CustomerDashboardPageComponent', () => {
    let fixture: ComponentFixture<CustomerDashboardPageComponent>;
    let compiled: HTMLElement;

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
                provideCustomerDashboardPageMockService(),
            ],
        }).compileComponents();
        fixture = TestBed.createComponent(CustomerDashboardPageComponent);
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
    it('should render the anchor in the grid if it is provided in the vm', () => {
        // Arrange
        updateVMSubject(mockVMWithAnchorInGridXVM);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should not render the anchor in the grid if it is not provided in the vm', () => {
        // Arrange
        updateVMSubject(mockVMWithoutAnchorInGridXVM);

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
    it('should render 0 order if 0 is provided in the vm', () => {
        // Arrange
        updateVMSubject(mockVMWithoutOrderXVM);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render 1 order if 1 is provided in the vm', () => {
        // Arrange
        updateVMSubject(mockVMWithOneOrderXVM);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render 3 order if 3 is provided in the vm', () => {
        // Arrange
        updateVMSubject(mockVMWithThreeOrderXVM);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render 1 myOrder if 1 is provided in the vm', () => {
        // Arrange
        updateVMSubject(mockVMWithOneMyOrderXVM);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render 1 companyOrder if 1 is provided in the vm', () => {
        // Arrange
        updateVMSubject(mockVMWithOneCompanyOrderXVM);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render orders with all the status types if all of them is provided in the vm', () => {
        // Arrange
        updateVMSubject(mockVMWithOrderXVMsWithAllStatusTypes);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});
