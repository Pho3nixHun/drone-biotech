import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { GridItemComponent } from './grid-item.component';

@Component({
    imports: [GridItemComponent],
    template: `
        <app-grid-item>
            <p>Should be projected</p>
        </app-grid-item>
    `,
})
class TestHostComponent {}

describe('GridItemComponent', () => {
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
    it('should render the template correctly', () => {
        // There is no need to arrange

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});
