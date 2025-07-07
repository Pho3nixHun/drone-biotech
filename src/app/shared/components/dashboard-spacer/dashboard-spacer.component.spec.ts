import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSpacerComponent } from './dashboard-spacer.component';
import { Component } from '@angular/core';

@Component({
    imports: [DashboardSpacerComponent],
    template: `<app-dashboard-spacer
        ><div>Should be projected</div></app-dashboard-spacer
    >`,
})
class TestHostComponent {}

describe('DashboardSpacerComponent', () => {
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
    it('should render the template correctly', () => {
        //Arrange

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });
});
