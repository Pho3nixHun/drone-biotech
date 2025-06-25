import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryComponent } from './summary.component';
import { Component } from '@angular/core';

@Component({
    imports: [SummaryComponent],
    template: `
        <app-summary
            ><p>Title</p>
            <p>Value</p>
        </app-summary>
    `,
})
class TestHostComponent {}

describe('SummaryComponent', () => {
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
