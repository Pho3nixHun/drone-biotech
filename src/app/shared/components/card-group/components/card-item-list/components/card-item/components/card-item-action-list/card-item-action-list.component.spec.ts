import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemActionListComponent } from './card-item-action-list.component';
import { Component } from '@angular/core';

@Component({
    imports: [CardItemActionListComponent],
    template: `
        <app-card-item-action-list>
            <button>Should be projected</button>
            <button>Should be projected</button>
            <p>Should not be projected</p>
        </app-card-item-action-list>
    `,
})
class TestHostComponent {}

describe('CardItemActionListComponent', () => {
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
