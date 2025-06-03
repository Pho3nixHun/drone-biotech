import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsItemListComponent } from './details-item-list.component';
import { Component } from '@angular/core';
import { DetailsItemComponent } from '@components/details-item/details-item.component';

@Component({
    imports: [DetailsItemListComponent, DetailsItemComponent],
    template: `
        <app-details-item-list>
            <app-details-item></app-details-item>
            <div>Should not be projected</div>
        </app-details-item-list>
    `,
})
class TestHostComponent {}

describe('DetailsItemListComponent', () => {
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
        expect(compiled.innerHTML).toMatchSnapshot();
    });
});
