import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepIndicatorComponent } from './step-indicator.component';
import { Component } from '@angular/core';

@Component({
    imports: [StepIndicatorComponent],
    template: `
        <app-step-indicator>
            <div></div>
        </app-step-indicator>
    `,
})
class TestHostComponent {}
describe('StepIndicatorComponent', () => {
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
    it('should render the template correctly', () => {
        // There is no need to arrange

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});
