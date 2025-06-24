import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupplyItemListComponent } from './supply-item-list.component';
import { Component } from '@angular/core';
import { SupplyItemComponent } from '@components/supply-item/supply-item.component';

@Component({
    imports: [SupplyItemListComponent, SupplyItemComponent],
    template: `
        <app-supply-item-list>
            <app-supply-item></app-supply-item>
            <app-supply-item></app-supply-item>
            <div>Should not be projected</div>
        </app-supply-item-list>
    `,
})
class TestHostComponent {}

describe('SupplyItemListComponent', () => {
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
