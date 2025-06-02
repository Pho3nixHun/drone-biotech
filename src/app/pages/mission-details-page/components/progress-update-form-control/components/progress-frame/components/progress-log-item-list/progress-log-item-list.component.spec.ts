import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressLogItemListComponent } from './progress-log-item-list.component';
import { Component } from '@angular/core';
import { ProgressLogItemComponent } from './components/progress-log-item/progress-log-item.component';

@Component({
    imports: [ProgressLogItemListComponent, ProgressLogItemComponent],
    template: `
        <app-progress-log-item-list>
            <app-progress-log-item></app-progress-log-item>
            <app-progress-log-item></app-progress-log-item>
            <div>Should no be projected</div>
        </app-progress-log-item-list>
    `,
})
class TestHostComponent {}
describe('ProgressLogItemListComponent', () => {
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
