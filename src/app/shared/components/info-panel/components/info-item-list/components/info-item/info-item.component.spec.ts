import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoItemComponent } from './info-item.component';
import { Component } from '@angular/core';

@Component({
    imports: [InfoItemComponent],
    template: `
        <app-info-item>
            <dl>label</dl>
            <dd>value</dd>
        </app-info-item>
    `,
})
class TestHostComponent {}

describe('InfoItemComponent', () => {
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
        // There is no need to arrange

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });
});
