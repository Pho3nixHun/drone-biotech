import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InlineComponent } from './inline.component';
import { Component } from '@angular/core';

@Component({
    imports: [InlineComponent],
    template: `
        <app-inline>
            <h2>Should be projected</h2>
            <p>Should be projected</p>
        </app-inline>
    `,
})
class TestHostComponent {}
describe('InlineComponent', () => {
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
