import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressItemListComponent } from './progress-item-list.component';
import { Component } from '@angular/core';
import { ProgressItemComponent } from './components/progress-item/progress-item.component';
@Component({
    imports: [ProgressItemListComponent, ProgressItemComponent],
    template: `
        <app-progress-item-list>
            <app-progress-item></app-progress-item>
            <div>Should not be projected</div>
        </app-progress-item-list>
    `,
})
class TestHostComponent {}
describe('ProgressItemListComponent', () => {
    let compiled: HTMLElement;
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestHostComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        compiled = fixture.debugElement.nativeElement;
    });

    // Snapshot testing
    it('should render the template correctly', () => {
        // There is no need to arrange

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});
