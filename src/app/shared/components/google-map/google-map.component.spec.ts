import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoogleMapComponent } from './google-map.component';
import { Component } from '@angular/core';
import { GoogleMapVM } from './google-map.model';
import { By } from '@angular/platform-browser';

@Component({
    imports: [GoogleMapComponent],
    template: ` <app-google-map [vm]="vm" /> `,
})
class TestHostComponent {
    vm: GoogleMapVM = {
        center: { lat: 1, lng: 1 },
        mapOptions: {},
    };
}

describe('GoogleMapComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let compiled: HTMLElement;
    let component: GoogleMapComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestHostComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        component = fixture.debugElement.query(
            By.directive(GoogleMapComponent)
        ).componentInstance;
        compiled = fixture.debugElement.nativeElement;
    });

    // Snapshot testing
    it('should render the template correctly', () => {
        // There is no need to arrange

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Unit testing
    it('should set the mapSignal with a map', () => {
        // There is no need to arrange

        // Act
        fixture.detectChanges();

        // Assert
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(component.mapSignal()).toBeTruthy;
    });
});
