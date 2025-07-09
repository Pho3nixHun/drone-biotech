import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SupplyItemComponent } from './supply-item.component';
import { Component } from '@angular/core';

@Component({
    imports: [SupplyItemComponent],
    template: `
        <app-supply-item>
            <h3>Should be projected</h3>
            <p>Should be projected</p>
            <div>Should not be projected</div>
        </app-supply-item>
    `,
})
class TestHostComponent {}

describe('SupplyItemComponent', () => {
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
