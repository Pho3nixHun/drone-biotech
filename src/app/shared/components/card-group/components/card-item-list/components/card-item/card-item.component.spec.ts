import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemComponent } from './card-item.component';
import { Component } from '@angular/core';
import { CardItemContentComponent } from './components/card-item-content/card-item-content.component';
import { CardItemActionListComponent } from './components/card-item-action-list/card-item-action-list.component';

@Component({
    imports: [
        CardItemComponent,
        CardItemContentComponent,
        CardItemActionListComponent,
    ],
    template: `
        <app-card-item>
            <app-card-item-content></app-card-item-content>
            <app-card-item-action-list></app-card-item-action-list>
            <p>Should not be projected</p>
        </app-card-item>
    `,
})
class TestHostComponent {}

describe('CardItemComponent', () => {
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
