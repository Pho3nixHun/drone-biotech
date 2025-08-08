import { Component, input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { GoogleMapComponent } from '@components/google-map/google-map.component';
import { DrawEntryPointsDirective } from './draw-entry-points.directive';
import { EntryPointXVM } from './draw-entry-points.model';

@Component({
    imports: [DrawEntryPointsDirective, GoogleMapComponent],
    template: `
        <app-google-map
            class="h-96"
            appDrawEntryPoints
            [entryPoints]="entryPoints()"
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
    entryPoints = input.required<EntryPointXVM[] | null>();

    mapRef: google.maps.Map = new google.maps.Map(
        document.createElement('div'),
        {
            zoom: 5,
            center: { lat: 1, lng: 1 },
        }
    );
}

describe('DrawEntryPointsDirective', () => {
    let component: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;
    let directive: DrawEntryPointsDirective;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TestHostComponent],
        });
        fixture = TestBed.createComponent(TestHostComponent);
        component = fixture.debugElement.componentInstance;
        directive = fixture.debugElement
            .query(By.directive(GoogleMapComponent))
            .injector.get(DrawEntryPointsDirective);
    });

    // Unit testing
    it('should create the directive and set the inputs', () => {
        // Arrange
        fixture.componentRef.setInput('entryPoints', null);

        // Act
        fixture.detectChanges();

        // Assert
        expect(directive.entryPoints()).toStrictEqual(component.entryPoints());
    });
});
