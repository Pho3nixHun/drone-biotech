import {
    enMock,
    mockVM,
    mockVMWithAllDifferentProgressGroup,
    mockVMWithOneProgressGroup,
    mockVMWithOneProgressItem,
    mockVMWithoutProgressGroup,
    mockVMWithoutProgressItem,
    mockVMWithProgressItemWithAllDifferentStates,
    mockVMWithThreeProgressGroup,
    mockVMWithThreeProgressItem,
} from './progress-form-control.mock';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressFormControlComponent } from './progress-form-control.component';
import { provideMockDialogService } from '@services/dialog/dialog.service.mock';
import { getTranslocoModule } from 'transloco-testing.module';
import { Component, inject, input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LogItem, ProgressFormControlVM } from './progress-form-control.model';

@Component({
    imports: [ProgressFormControlComponent, ReactiveFormsModule],
    template: `<app-progress-form-control
        [formControl]="logItemsControl"
        [vm]="vm()"
    />`,
})
class TestHostComponent {
    private readonly fb = inject(FormBuilder);
    public vm = input.required<ProgressFormControlVM>();
    public readonly logItemsControl = this.fb.control<LogItem[] | null>(null);
}

describe('ProgressFormControlComponent', () => {
    let component: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                TestHostComponent,
                getTranslocoModule({
                    langs: { en: enMock },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
            providers: [provideMockDialogService()],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        component = fixture.componentInstance;
        compiled = fixture.debugElement.nativeElement;
    });

    // Snapshot testing
    it('should render the template correctly if the vm is provided', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockVM);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render 0 progress group if the 0 progress group is provided', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockVMWithoutProgressGroup);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render 1 progress group if the 1 progress group is provided', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockVMWithOneProgressGroup);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render 3 progress group if the 3 progress group is provided', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockVMWithThreeProgressGroup);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render all different progress groups if provided', () => {
        // Arrange
        fixture.componentRef.setInput(
            'vm',
            mockVMWithAllDifferentProgressGroup
        );

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render 0 progress item if 0 progress item is provided', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockVMWithoutProgressItem);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render 1 progress item if 1 progress item is provided', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockVMWithOneProgressItem);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render 3 progress item if 3 progress item is provided', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockVMWithThreeProgressItem);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render progress items with all different states', () => {
        // Arrange
        fixture.componentRef.setInput(
            'vm',
            mockVMWithProgressItemWithAllDifferentStates
        );

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should not render the log items section if there is no log item provided', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockVM);
        component.logItemsControl.setValue(null);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should not render the log items section if an empty array is provided', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockVM);
        component.logItemsControl.setValue([]);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the log items section with one log item', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockVM);
        component.logItemsControl.setValue([
            { type: 'abort', creationDate: new Date(1), text: 'something' },
        ]);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the log items section with three log items', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockVM);
        component.logItemsControl.setValue([
            { type: 'abort', creationDate: new Date(1), text: 'something1' },
            { type: 'accept', creationDate: new Date(2), text: 'something2' },
            { type: 'assign', creationDate: new Date(3), text: 'something3' },
        ]);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render all different log items state', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockVM);
        component.logItemsControl.setValue([
            { type: 'reject', creationDate: new Date(1), text: 'something1' },
            { type: 'arrive', creationDate: new Date(2), text: 'something2' },
            { type: 'assign', creationDate: new Date(3), text: 'something3' },
            {
                type: 'customerCancel',
                creationDate: new Date(4),
                text: 'something4',
            },
        ]);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});
