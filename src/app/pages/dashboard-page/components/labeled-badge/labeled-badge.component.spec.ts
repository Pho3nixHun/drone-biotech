import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { LabeledBadgeComponent } from './labeled-badge.component';

@Component({
    imports: [LabeledBadgeComponent],
    template: `
        <app-labeled-badge [color]="'text-blue-500'">
            <p>Should be projected</p>
        </app-labeled-badge>
    `,
})
class TestHostComponent {}

describe('LabeledBadgeComponent', () => {
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
    it('should render the template correctly', () => {
        // There is no need to arrange

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});
