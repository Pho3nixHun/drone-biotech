import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoogleMapComponent } from './google-map.component';
import { Component, signal } from '@angular/core';
import { GoogleMapHeight, GoogleMapVM } from './google-map.model';

@Component({
    imports: [GoogleMapComponent],
    template: ` <app-google-map [vm]="vm" [mapSignal]="mapSignal" /> `,
})
class TestHostComponent {
    vm: GoogleMapVM = {
        center: { lat: 1, lng: 1 },
        height: GoogleMapHeight.FIVE_HUNDRED_PX,
        mapOptions: {},
    };

    mapSignal = signal<google.maps.Map | null>(null);
}

describe('GoogleMapComponent', () => {
    let component: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestHostComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        component = fixture.componentInstance;
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
    it('should propagate back the initialized map', () => {
        // There is no need to arrange

        // Act
        fixture.detectChanges();

        // Assert
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(component.mapSignal()).toBeTruthy;
    });
});
