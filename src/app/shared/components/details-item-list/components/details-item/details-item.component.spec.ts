import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsItemComponent } from './details-item.component';
import { Component } from '@angular/core';

@Component({
    imports: [DetailsItemComponent],
    template: `
        <app-details-item>
            <app-avatar>Should be projected</app-avatar>
            <h4>Should be projected</h4>
            <p>Should be projected</p>
            <time datetime="">Should not be projected</time>
        </app-details-item>
    `,
})
class TestHostComponent {}

describe('DetailsItemComponent', () => {
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
