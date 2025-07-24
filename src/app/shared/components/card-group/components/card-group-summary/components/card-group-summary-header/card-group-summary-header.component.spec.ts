import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGroupSummaryHeaderComponent } from './card-group-summary-header.component';
import { Component } from '@angular/core';

@Component({
    imports: [CardGroupSummaryHeaderComponent],
    template: `
        <app-card-group-summary-header>
            <div>Should be projected</div>
            <p>Should not be projected</p>
        </app-card-group-summary-header>
    `,
})
class TestHostComponent {}

describe('CardGroupSummaryHeaderComponent', () => {
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
