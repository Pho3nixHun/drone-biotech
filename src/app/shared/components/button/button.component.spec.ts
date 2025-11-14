import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { Component, input } from '@angular/core';
import { ButtonXVM } from './button.model';
import {
    mockFillButton,
    mockGhostButton,
    mockOutlineButton,
    mockPrimaryButton,
    mockSecondaryButton,
} from './button.mock';
import { MatIconModule } from '@angular/material/icon';

@Component({
    imports: [ButtonComponent, MatIconModule],
    template: `
        <app-button [vm]="vm()" [disabled]="disabled()" [active]="active()">
            text
            <mat-icon>search</mat-icon>
        </app-button>
    `,
})
class TestHostComponent {
    public vm = input.required<ButtonXVM>();
    public disabled = input<boolean>();
    public active = input<boolean>();
}
describe('ButtonComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestHostComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        compiled = fixture.debugElement.nativeElement;
    });

    // Snapshot testing
    it('should render a primary button', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockPrimaryButton);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render a secondary button', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockSecondaryButton);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render a filled button', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockFillButton);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render a ghost button', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockGhostButton);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render an outline button', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockOutlineButton);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render an active button', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockPrimaryButton);
        fixture.componentRef.setInput('active', true);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render a disabled button', () => {
        // Arrange
        fixture.componentRef.setInput('vm', mockPrimaryButton);
        fixture.componentRef.setInput('disabled', true);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});
