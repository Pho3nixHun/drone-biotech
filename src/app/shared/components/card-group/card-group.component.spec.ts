import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGroupComponent } from './card-group.component';
import { Component } from '@angular/core';
import { CardItemListComponent } from './components/card-item-list/card-item-list.component';
import { CardGroupSummaryComponent } from './components/card-group-summary/card-group-summary.component';
import { CardGroupHeaderComponent } from './components/card-group-header/card-group-header.component';

@Component({
    imports: [
        CardGroupHeaderComponent,
        CardGroupComponent,
        CardItemListComponent,
        CardGroupSummaryComponent,
    ],
    template: `
        <app-card-group>
            <app-card-group-header></app-card-group-header>
            <app-card-item-list></app-card-item-list>
            <app-card-group-summary></app-card-group-summary>
            <div>Should not be projected</div>
        </app-card-group>
    `,
})
class TestHostComponent {}

describe('CardGroupComponent', () => {
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
