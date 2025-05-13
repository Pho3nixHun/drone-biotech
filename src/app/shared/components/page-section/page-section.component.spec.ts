import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageSectionComponent } from './page-section.component';
import { Component } from '@angular/core';

@Component({
    imports: [PageSectionComponent],
    template: `
        <app-page-section>
            <p>Should be projected</p>
        </app-page-section>
    `,
})
class TestHostComponent {}

describe('PageSectionComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestHostComponent],
        }).compileComponents();
        fixture = TestBed.createComponent(TestHostComponent);
        compiled = fixture.debugElement.nativeElement;
    });

    it('should render the template when the VM is provided', () => {
        //Arrange
        //There is no need to arrange
        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });
});
