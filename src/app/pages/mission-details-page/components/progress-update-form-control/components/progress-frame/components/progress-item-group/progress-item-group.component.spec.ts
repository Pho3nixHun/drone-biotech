import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressItemGroupComponent } from './progress-item-group.component';
import { Component } from '@angular/core';
import { StepIndicatorComponent } from '@components/step-indicator/step-indicator.component';

@Component({
    imports: [ProgressItemGroupComponent, StepIndicatorComponent],
    template: `
        <app-progress-item-group>
            <app-step-indicator></app-step-indicator>
            <h3>Should be projected</h3>
            <button>Should be projected</button>
            <div>Should not be projected</div>
        </app-progress-item-group>
    `,
})
class TestHostComponent {}
describe('ProgressItemGroupComponent', () => {
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
    it('should project the content and render the template correctly', () => {
        // There is no need to arrange

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});
