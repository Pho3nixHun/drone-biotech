import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GridComponent } from './grid.component';
import { Component } from '@angular/core';
import { GridColsLength, GridVM } from './grid.model';

@Component({
    imports: [GridComponent],
    template: `
        <app-grid [vm]="gridVM">
            <p>Should be projected</p>
        </app-grid>
    `,
})
class TestHostComponent {
    protected gridVM: GridVM = {
        gridColsLength: GridColsLength.SIX,
    };
}

describe('GridComponent', () => {
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
