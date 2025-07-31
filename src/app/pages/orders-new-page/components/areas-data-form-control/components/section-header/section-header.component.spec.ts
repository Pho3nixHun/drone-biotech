import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHeaderComponent } from './section-header.component';
import { Component } from '@angular/core';

@Component({
    imports: [SectionHeaderComponent],
    template: `
        <app-section-header>
            <h3>Should be projected</h3>
            <button>Should be projected</button>
            <div>Should not be projected</div>
        </app-section-header>
    `,
})
class TestHostComponent {}

describe('SectionHeaderComponent', () => {
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
