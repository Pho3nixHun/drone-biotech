import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClusterComponent, Gap } from './cluster.component';
import { Component, input } from '@angular/core';

@Component({
    imports: [ClusterComponent],
    template: `
        <app-cluster [gapX]="gapX()" [gapY]="gapY()">
            <h2>Should be projected</h2>
            <p>Should be projected</p>
        </app-cluster>
    `,
})
class TestHostComponent {
    gapX = input<Gap>();
    gapY = input<Gap>();
}

describe('ClusterComponent', () => {
    let compiled: HTMLElement;
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestHostComponent],
        }).compileComponents();
        fixture = TestBed.createComponent(TestHostComponent);
        compiled = fixture.debugElement.nativeElement;
    });

    // Snapshot testing
    it('should render the template with gapX none', () => {
        // Arrange
        fixture.componentRef.setInput('gapX', 'none');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the template with gapX xs', () => {
        // Arrange
        fixture.componentRef.setInput('gapX', 'xs');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template with gapX sm', () => {
        // Arrange
        fixture.componentRef.setInput('gapX', 'sm');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template with gapX md', () => {
        // Arrange
        fixture.componentRef.setInput('gapX', 'md');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template with gapX lg', () => {
        // Arrange
        fixture.componentRef.setInput('gapX', 'lg');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template with gapX xl', () => {
        // Arrange
        fixture.componentRef.setInput('gapX', 'xl');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template with gapX 2xl', () => {
        // Arrange
        fixture.componentRef.setInput('gapX', '2xl');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template with gapY none', () => {
        // Arrange
        fixture.componentRef.setInput('gapY', 'none');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Snapshot testing
    it('should render the template with gapY xs', () => {
        // Arrange
        fixture.componentRef.setInput('gapY', 'xs');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template with gapY sm', () => {
        // Arrange
        fixture.componentRef.setInput('gapY', 'sm');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template with gapY md', () => {
        // Arrange
        fixture.componentRef.setInput('gapY', 'md');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template with gapY lg', () => {
        // Arrange
        fixture.componentRef.setInput('gapY', 'lg');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template with gapY xl', () => {
        // Arrange
        fixture.componentRef.setInput('gapY', 'xl');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
    // Snapshot testing
    it('should render the template with gapY 2xl', () => {
        // Arrange
        fixture.componentRef.setInput('gapY', '2xl');

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});
