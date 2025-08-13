import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressItemComponent } from './progress-item.component';
import { Component } from '@angular/core';
@Component({
    imports: [ProgressItemComponent],
    template: `
        <app-progress-item>
            <button>A</button>
            <div>Should not be projected</div>
        </app-progress-item>
    `,
})
class TestHostComponent {}
describe('ProgressItemComponent', () => {
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
