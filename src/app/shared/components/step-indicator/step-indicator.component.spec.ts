import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepIndicatorComponent } from './step-indicator.component';
import { Component } from '@angular/core';

@Component({
    imports: [StepIndicatorComponent],
    template: `
        <app-step-indicator>
            <div>Should be projected</div>
        </app-step-indicator>
    `,
})
class TestHostComponent {}

describe('StepIndicatorComponent', () => {
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
