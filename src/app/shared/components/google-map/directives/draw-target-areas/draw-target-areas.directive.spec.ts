import { DrawTargetAreasDirective } from './draw-target-areas.directive';
import { Component, input, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { GoogleMapComponent } from '@components/google-map/google-map.component';
import { TargetAreaXVM } from 'src/app/pages/order-details-page/order-details-page.model';

@Component({
    imports: [DrawTargetAreasDirective, GoogleMapComponent],
    template: `
        <app-google-map
            class="h-96"
            appDrawTargetAreas
            [targetAreas]="targetAreas()"
            [drawnPolygons]="drawnPolygons"
            [vm]="{
                mapOptions: {},
                center: {
                    lat: 1,
                    lng: 1,
                },
            }"
        />
    `,
})
class TestHostComponent {
    targetAreas = input.required<TargetAreaXVM[] | null>();
    drawnPolygons = signal<google.maps.Polygon[] | null>(null);
    mapRef: google.maps.Map = new google.maps.Map(
        document.createElement('div'),
        {
            zoom: 5,
            center: { lat: 1, lng: 1 },
        }
    );
}

describe('DrawTargetAreasDirective', () => {
    let component: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;
    let directive: DrawTargetAreasDirective;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TestHostComponent],
        });
        fixture = TestBed.createComponent(TestHostComponent);
        component = fixture.debugElement.componentInstance;
        directive = fixture.debugElement
            .query(By.directive(GoogleMapComponent))
            .injector.get(DrawTargetAreasDirective);
    });

    // Unit testing
    it('should create the directive and set the inputs', () => {
        // Arrange
        fixture.componentRef.setInput('targetAreas', null);

        // Act
        fixture.detectChanges();

        // Assert
        expect(directive.targetAreas()).toStrictEqual(component.targetAreas());
    });

    // Unit testing
    it('should create the polygons if there are target areas', () => {
        // Arrange
        fixture.componentRef.setInput('targetAreas', [
            {
                options: {},
                coordinates: [
                    { lat: 1, lng: 1 },
                    { lat: 4, lng: 1 },
                    { lat: 1, lng: 3 },
                    { lat: 2, lng: 2 },
                ],
            },
        ]);

        // Act
        fixture.detectChanges();

        // Assert
        expect(directive.drawnPolygons()()).toBeTruthy();
    });

    // Unit testing
    it('should not create polygons if there are no target areas', () => {
        // Arrange
        fixture.componentRef.setInput('targetAreas', null);

        // Act
        fixture.detectChanges();

        // Assert
        expect(directive.drawnPolygons()()).toBeFalsy();
    });
});
