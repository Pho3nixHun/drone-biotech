import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressLogItemComponent } from './progress-log-item.component';
import { Component } from '@angular/core';

@Component({
    imports: [ProgressLogItemComponent],
    template: `
        <app-progress-log-item>
            <div>Should not be projected</div>
            <h3>Should be projected</h3>
            <p>Should be projected</p>
            <time datetime="">Should be projected</time>
        </app-progress-log-item>
    `,
})
class TestHostComponent {}

describe('ProgressLogItemComponent', () => {
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
