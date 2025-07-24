import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGroupHeaderComponent } from './card-group-header.component';
import { Component } from '@angular/core';

@Component({
    imports: [CardGroupHeaderComponent],
    template: `
        <app-card-group-header>
            <div>Should be projected</div>
            <p>Should not be projected</p>
        </app-card-group-header>
    `,
})
class TestHostComponent {}

describe('CardGroupHeaderComponent', () => {
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
