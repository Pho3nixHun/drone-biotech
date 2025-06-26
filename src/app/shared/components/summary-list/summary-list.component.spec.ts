import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryListComponent } from './summary-list.component';
import { SummaryComponent } from './components/summary/summary.component';
import { Component } from '@angular/core';

@Component({
    imports: [SummaryListComponent, SummaryComponent],
    template: `
        <app-summary-list>
            <app-summary />
        </app-summary-list>
    `,
})
class TestHostComponent {}

describe('SummaryListComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestHostComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        compiled = fixture.debugElement.nativeElement;
    });

    //Snapshot test
    it('should render the template', () => {
        //Arrange
        /*No need for arrange*/

        //Act
        fixture.detectChanges();
        //Assert
        expect(compiled).toMatchSnapshot();
    });
});
