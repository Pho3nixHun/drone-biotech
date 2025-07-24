import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemListComponent } from './card-item-list.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { Component } from '@angular/core';

@Component({
    imports: [CardItemComponent, CardItemListComponent],
    template: `
        <app-card-item-list>
            <app-card-item></app-card-item>
        </app-card-item-list>
    `,
})
class TestHostComponent {}

describe('CardItemListComponent', () => {
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
