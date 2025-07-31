import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapInitializerDirective } from './map-initializer.directive';

@Component({
    imports: [MapInitializerDirective],
    template: `
        <div
            appMapInitializer
            [mapSignal]="mapSignal"
            [mapOptions]="mapOptions"
            [mapCenter]="mapCenter"
        ></div>
    `,
})
class TestHostComponent {
    mapSignal = signal<google.maps.Map | null>(null);
    mapCenter = { center: { lat: 1, lng: 1 } };
    mapOptions: google.maps.MapOptions = {
        zoom: 5,
    };
}

describe('MapInitializerDirective', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let component: TestHostComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TestHostComponent],
        });

        fixture = TestBed.createComponent(TestHostComponent);
        component = fixture.componentInstance;
    });

    // Unit testing
    it('should create the directive and initialize the map', () => {
        // There is no need to arrange

        // Act
        fixture.detectChanges();

        // Assert
        const map = component.mapSignal();
        expect(map).toBeTruthy();
        expect(map?.setOptions).toHaveBeenCalledWith(component.mapOptions);
        expect(map?.setCenter).toHaveBeenCalledWith(component.mapCenter);
    });
});
