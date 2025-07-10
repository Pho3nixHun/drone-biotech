import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPanelComponent } from './info-panel.component';
import { Component } from '@angular/core';
import { InfoItemComponent } from './components/info-item-list/components/info-item/info-item.component';
import { InfoItemListComponent } from './components/info-item-list/info-item-list.component';

@Component({
    imports: [InfoPanelComponent, InfoItemComponent, InfoItemListComponent],
    template: `<app-info-panel
        ><div>Should not be projected</div>
        <app-info-item-list>
            <app-info-item></app-info-item>
        </app-info-item-list>
    </app-info-panel>`,
})
class TestHostComponent {}

describe('InfoPanelComponent', () => {
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
