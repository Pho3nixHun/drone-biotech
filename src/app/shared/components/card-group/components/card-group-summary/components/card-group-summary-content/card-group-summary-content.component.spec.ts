import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGroupSummaryContentComponent } from './card-group-summary-content.component';
import { Component } from '@angular/core';

@Component({
    imports: [CardGroupSummaryContentComponent],
    template: `
        <app-card-group-summary-content>
            <div>Should be projected</div>
            <p>Should not be projected</p>
        </app-card-group-summary-content>
    `,
})
class TestHostComponent {}

describe('CardGroupSummaryContentComponent', () => {
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
