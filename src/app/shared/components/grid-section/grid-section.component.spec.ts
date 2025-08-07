import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { GridComponent } from './components/grid/grid.component';
import { GridSectionHeaderComponent } from './components/grid-section-header/grid-section-header.component';
import { GridSectionComponent } from './grid-section.component';

@Component({
    imports: [GridComponent, GridSectionHeaderComponent, GridSectionComponent],
    template: `
        <app-grid-section>
            <app-grid-section-header></app-grid-section-header>
            <app-grid></app-grid>
            <p>Should not be projected</p>
        </app-grid-section>
    `,
})
class TestHostComponent {}

describe('GridSectionComponent', () => {
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
