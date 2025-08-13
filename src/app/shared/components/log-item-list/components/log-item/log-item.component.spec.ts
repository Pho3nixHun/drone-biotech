import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogItemComponent } from './log-item.component';
import { Component } from '@angular/core';
@Component({
    imports: [LogItemComponent],
    template: `
        <app-log-item>
            <strong></strong>
            <time datetime=""></time>
            <p></p>
            <div>Should not be projected</div>
        </app-log-item>
    `,
})
class TestHostComponent {}
describe('LogItemComponent', () => {
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
