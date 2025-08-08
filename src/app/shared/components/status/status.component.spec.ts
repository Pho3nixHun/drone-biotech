import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusComponent } from './status.component';
import { Component } from '@angular/core';

@Component({
    imports: [StatusComponent],
    template: ` <app-status>Status</app-status> `,
})
class TestHostComponent {}

describe('StatusComponent', () => {
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
        // Arrange

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });
});
