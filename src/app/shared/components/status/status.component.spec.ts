import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusComponent } from './status.component';
import { Component } from '@angular/core';
import { StatusVM } from './status.model';

@Component({
    imports: [StatusComponent],
    template: ` <app-status [vm]="vm">Status</app-status> `,
})
class TestHostComponent {
    vm: StatusVM = {
        styles: 'text-blue-500',
    };
}

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
