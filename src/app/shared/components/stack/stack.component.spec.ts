import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Gap, Orientation, StackComponent } from './stack.component';
import { Component, input } from '@angular/core';

@Component({
    imports: [StackComponent],
    template: `
        <app-stack [orientation]="orientation()" [gap]="gap()">
            <h2>Should be projected</h2>
            <p>Should be projected</p>
        </app-stack>
    `,
})
class TestHostComponent {
    orientation = input<Orientation>();
    gap = input<Gap>();
}

describe('StackComponent', () => {
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
    it('should render the template horizontal with no gap', () => {
        // Arrange
        fixture.componentRef.setInput('orientation', 'horizontal');
        fixture.componentRef.setInput('gap', 'none');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the template horizontal with xs gap', () => {
        // Arrange
        fixture.componentRef.setInput('orientation', 'horizontal');
        fixture.componentRef.setInput('gap', 'xs');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template horizontal with sm gap', () => {
        // Arrange
        fixture.componentRef.setInput('orientation', 'horizontal');
        fixture.componentRef.setInput('gap', 'sm');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template horizontal with md gap', () => {
        // Arrange
        fixture.componentRef.setInput('orientation', 'horizontal');
        fixture.componentRef.setInput('gap', 'md');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template horizontal with lg gap', () => {
        // Arrange
        fixture.componentRef.setInput('orientation', 'horizontal');
        fixture.componentRef.setInput('gap', 'lg');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template horizontal with xl gap', () => {
        // Arrange
        fixture.componentRef.setInput('orientation', 'horizontal');
        fixture.componentRef.setInput('gap', 'xl');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template horizontal with 2xl gap', () => {
        // Arrange
        fixture.componentRef.setInput('orientation', 'horizontal');
        fixture.componentRef.setInput('gap', '2xl');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template vertical with no gap', () => {
        // Arrange
        fixture.componentRef.setInput('orientation', 'vertical');
        fixture.componentRef.setInput('gap', 'none');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the template vertical with xs gap', () => {
        // Arrange
        fixture.componentRef.setInput('orientation', 'vertical');
        fixture.componentRef.setInput('gap', 'xs');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template vertical with sm gap', () => {
        // Arrange
        fixture.componentRef.setInput('orientation', 'vertical');
        fixture.componentRef.setInput('gap', 'sm');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template vertical with md gap', () => {
        // Arrange
        fixture.componentRef.setInput('orientation', 'vertical');
        fixture.componentRef.setInput('gap', 'md');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template vertical with lg gap', () => {
        // Arrange
        fixture.componentRef.setInput('orientation', 'vertical');
        fixture.componentRef.setInput('gap', 'lg');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template vertical with xl gap', () => {
        // Arrange
        fixture.componentRef.setInput('orientation', 'vertical');
        fixture.componentRef.setInput('gap', 'xl');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template vertical with 2xl gap', () => {
        // Arrange
        fixture.componentRef.setInput('orientation', 'vertical');
        fixture.componentRef.setInput('gap', '2xl');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});
