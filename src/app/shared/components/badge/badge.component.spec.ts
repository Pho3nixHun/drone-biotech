import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BadgeComponent } from './badge.component';
import { Component, input } from '@angular/core';

type Intent = 'accent' | 'error' | 'warning' | 'success';
type Variant = 'fill' | 'outline';
type Shape = 'rounded' | 'pilled';

@Component({
    imports: [BadgeComponent],
    template: `
        <app-badge [intent]="intent()" [variant]="variant()" [shape]="shape()"
            >Text</app-badge
        >
    `,
})
class TestHostComponent {
    public intent = input<Intent>();
    public variant = input<Variant>();
    public shape = input<Shape>();
}

describe('BadgeComponent', () => {
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
    it('should render the default badge correctly', () => {
        // Arrange

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the filled badge correctly', () => {
        // Arrange
        fixture.componentRef.setInput('variant', 'fill');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the outlined badge correctly', () => {
        // Arrange
        fixture.componentRef.setInput('variant', 'outline');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render accent intent badge correctly', () => {
        // Arrange
        fixture.componentRef.setInput('intent', 'accent');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render error intent badge correctly', () => {
        // Arrange
        fixture.componentRef.setInput('intent', 'error');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render warning intent badge correctly', () => {
        // Arrange
        fixture.componentRef.setInput('intent', 'warning');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render success intent badge correctly', () => {
        // Arrange
        fixture.componentRef.setInput('intent', 'success');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render rounded badge correctly', () => {
        // Arrange
        fixture.componentRef.setInput('shape', 'rounded');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render pilled badge correctly', () => {
        // Arrange
        fixture.componentRef.setInput('shape', 'pilled');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});
