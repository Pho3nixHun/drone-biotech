import { DrawTargetAreasDirective } from './draw-target-areas.directive';
import { Component, input, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TargetAreaXVM } from 'src/app/pages/order-details-page/components/google-map/google-map.model';

@Component({
    imports: [DrawTargetAreasDirective],
    template: `
        <div
            appDrawTargetAreas
            [mapRef]="mapRef"
            [targetAreas]="targetAreas()"
            [drawnPolygons]="drawnPolygons"
        ></div>
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
    it('should create the directive and set the inputs', () => {
        // Arrange
        fixture.componentRef.setInput('targetAreas', null);

        // Act
        fixture.detectChanges();

        const directive = fixture.debugElement.query(
            By.directive(DrawTargetAreasDirective)
        ).componentInstance;

        // Assert
        expect(directive.targetAreas).toStrictEqual(component.targetAreas);
        expect(directive.mapRef).toStrictEqual(component.mapRef);
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

        const directive = fixture.debugElement.query(
            By.directive(DrawTargetAreasDirective)
        ).componentInstance;

        // Assert
        expect(directive.drawnPolygons()).toBeTruthy();
    });

    // Unit testing
    it('should not create polygons if there are no target areas', () => {
        // Arrange
        fixture.componentRef.setInput('targetAreas', null);

        // Act
        fixture.detectChanges();

        const directive = fixture.debugElement.query(
            By.directive(DrawTargetAreasDirective)
        ).componentInstance;

        // Assert
        expect(directive.drawnPolygons()).toBeFalsy();
    });
});
