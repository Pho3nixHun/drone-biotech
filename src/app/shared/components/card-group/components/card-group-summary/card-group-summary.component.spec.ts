import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGroupSummaryComponent } from './card-group-summary.component';
import { Component } from '@angular/core';
import { CardGroupSummaryHeaderComponent } from './components/card-group-summary-header/card-group-summary-header.component';
import { CardGroupSummaryContentComponent } from './components/card-group-summary-content/card-group-summary-content.component';

@Component({
    imports: [
        CardGroupSummaryComponent,
        CardGroupSummaryHeaderComponent,
        CardGroupSummaryContentComponent,
    ],
    template: `
        <app-card-group-summary>
            <app-card-group-summary-header></app-card-group-summary-header>
            <app-card-group-summary-content></app-card-group-summary-content>
            <div>Should not be projected</div>
        </app-card-group-summary>
    `,
})
class TestHostComponent {}

describe('CardGroupSummaryComponent', () => {
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
