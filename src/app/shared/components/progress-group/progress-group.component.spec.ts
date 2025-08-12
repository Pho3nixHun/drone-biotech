import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressGroupComponent } from './progress-group.component';
import { Component } from '@angular/core';
import { ProgressItemListComponent } from './components/progress-item-list/progress-item-list.component';

@Component({
    imports: [ProgressGroupComponent, ProgressItemListComponent],
    template: `
        <app-progress-item-group>
            <app-progress-item-list></app-progress-item-list>
        </app-progress-item-group>
    `,
})
class TestHostComponent {}
describe('ProgressGroupComponent', () => {
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
