import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoItemListComponent } from './info-item-list.component';
import { InfoItemComponent } from './components/info-item/info-item.component';
import { Component } from '@angular/core';

@Component({
    imports: [InfoItemComponent, InfoItemListComponent],
    template: `
        <app-info-item-list>
            <div>Should not be projected</div>
            <app-info-item></app-info-item>
        </app-info-item-list>
    `,
})
class TestHostComponent {}

describe('InfoItemListComponent', () => {
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
