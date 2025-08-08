import { DrawTargetAreasDirective } from './draw-target-areas.directive';
import { Component, input, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { GoogleMapComponent } from '@components/google-map/google-map.component';
import { TargetAreaXVM } from './draw-target-areas.model';


@Component({
    imports: [DrawTargetAreasDirective, GoogleMapComponent],
    template: `
        <app-google-map
            class="h-96"
            appDrawTargetAreas
            [targetAreas]="targetAreas()"
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
});
