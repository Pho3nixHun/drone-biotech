import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { PageLayoutComponent } from './page-layout.component';

@Component({
    imports: [PageLayoutComponent],
    template: `
        <app-page-layout>
            <p>Should be projected</p>
        </app-page-layout>
    `,
})
class TestHostComponent {}

describe('PageLayoutComponent', () => {
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
