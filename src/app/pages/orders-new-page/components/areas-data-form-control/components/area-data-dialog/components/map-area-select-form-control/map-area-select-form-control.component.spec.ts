import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapAreaSelectFormControlComponent } from './map-area-select-form-control.component';
import {
    provideMockHeadOfficeLocation,
    updateHeadOfficeLocation,
} from '@services/distance/distance.model';
import {
    MapAreaSelectFormControlVM,
    provideMockMapOptions,
    provideMockPolygonOptions,
} from './map-area-select-form-control.model';
import { getTranslocoModule } from 'transloco-testing.module';
import { Component, DebugElement, input } from '@angular/core';
import { MapAreaSelectFormControlService } from './map-area-select-form-control.service';
import {
    provideMapAreaSelectFormControlMockService,
    updatePolygonSignal,
} from './map-area-select-form-control.service.mock';
import { By } from '@angular/platform-browser';
import { ElementRefDirective } from '@directives/element-ref.directive';

const enMock = { addButtonText: 'addButton', deleteButtonText: 'deleteButton' };
const headOfficeLocation = { lat: 10, lng: 10 };

const vm: MapAreaSelectFormControlVM = {
    deleteButtonTextKey: enMock.deleteButtonText,
    addButtonTextKey: enMock.addButtonText,
    defaultCenter: null,
};
@Component({
    template: `<app-map-area-select-form-control [vm]="vm()" />`,
})
class TestHostComponent {
    public vm = input.required<MapAreaSelectFormControlVM>();
}

describe('MapAreaSelectFormControlComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let compiled: HTMLElement;
    let service: MapAreaSelectFormControlService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                MapAreaSelectFormControlComponent,
                getTranslocoModule({
                    langs: { en: enMock },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
            providers: [
                provideMockHeadOfficeLocation(),
                provideMockMapOptions(),
                provideMockPolygonOptions(),
                provideMapAreaSelectFormControlMockService(),
            ],
            declarations: [TestHostComponent],
        }).compileComponents();
        updateHeadOfficeLocation(headOfficeLocation);
        fixture = TestBed.createComponent(TestHostComponent);
        service = TestBed.inject(MapAreaSelectFormControlService);
        compiled = fixture.debugElement.nativeElement;
    });

    // Snapshot test
    it('should render the template when the VM is provided', () => {
        //Arrange
        fixture.componentRef.setInput('vm', vm);

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    // Unit test
    it('should disable to add new target area to the map if one is already drawn', () => {
        // Arrange
        fixture.componentRef.setInput('vm', vm);
        updatePolygonSignal([
            { lat: 10, lng: 10 },
            { lat: 20, lng: 20 },
            { lat: 30, lng: 30 },
        ]);

        // Act
        fixture.detectChanges();
        const addButton: DebugElement = fixture.debugElement.query(
            By.css('button.btn-disabled')
        );

        // Assert
        expect(addButton.nativeElement.disabled).toBe(true);
    });

    // Unit test
    it('should enable to add new target area to the map if no target area is drawn', () => {
        // Arrange
        fixture.componentRef.setInput('vm', vm);
        updatePolygonSignal(null);

        // Act
        fixture.detectChanges();
        const addButton: DebugElement = fixture.debugElement.query(
            By.css('button.btn-primary')
        );

        // Assert
        expect(addButton.nativeElement.disabled).toBe(false);
    });

    it('should disable to delete target area if there is no target area drawn ', () => {
        // Arrange
        fixture.componentRef.setInput('vm', vm);
        updatePolygonSignal(null);

        // Act
        fixture.detectChanges();
        const addButton: DebugElement = fixture.debugElement.query(
            By.css('button.btn-disabled')
        );

        // Assert
        expect(addButton.nativeElement.disabled).toBe(true);
    });

    it('should enable to delete target area if there is a target area drawn ', () => {
        // Arrange
        fixture.componentRef.setInput('vm', vm);
        updatePolygonSignal([
            { lat: 10, lng: 10 },
            { lat: 20, lng: 20 },
            { lat: 30, lng: 30 },
            { lat: 40, lng: 40 },
        ]);

        // Act
        fixture.detectChanges();
        const deleteButton: DebugElement = fixture.debugElement.query(
            By.css('button.btn-error')
        );

        // Assert
        expect(deleteButton.nativeElement.disabled).toBe(false);
    });

    // Interaction test
    it('should call drawPolygon(null) when the addButton is clicked if there is no target area drawn', () => {
        //Arrange
        fixture.componentRef.setInput('vm', vm);
        updatePolygonSignal(null);

        //Act
        fixture.detectChanges();
        const serviceSpy = jest.spyOn(service, 'drawPolygon');
        fixture.debugElement
            .query(By.css('button'))
            .triggerEventHandler('click', null);

        //Assert
        expect(serviceSpy).toHaveBeenCalledWith(null);
    });

    // Interaction test
    it('should call deletePolygon() when the deleteButton is clicked if there is a target area drawn', () => {
        //Arrange
        fixture.componentRef.setInput('vm', vm);
        updatePolygonSignal([
            { lat: 10, lng: 10 },
            { lat: 20, lng: 20 },
            { lat: 30, lng: 30 },
        ]);

        //Act
        fixture.detectChanges();
        const serviceSpy = jest.spyOn(service, 'deletePolygon');
        fixture.debugElement
            .query(By.css('button.btn-error'))
            .triggerEventHandler('click', null);

        //Assert
        expect(serviceSpy).toHaveBeenCalledTimes(1);
    });

    it('should initialize the map with the mapCanvas', () => {
        //Arrange
        fixture.componentRef.setInput('vm', vm);
        const serviceSpy = jest.spyOn(service, 'initializeMap');

        //Act
        fixture.detectChanges();
        const mapCanvas = fixture.debugElement.query(
            By.directive(ElementRefDirective)
        );

        // Assert
        expect(serviceSpy).toHaveBeenCalledWith(
            mapCanvas.nativeElement,
            { center: headOfficeLocation },
            null
        );
    });

    // Unit test
    it('should initialize the map with the defaultCenter if there is no target area', () => {
        //Arrange
        const center = { lat: 2, lng: 2 };
        const vmWithCenter: MapAreaSelectFormControlVM = {
            deleteButtonTextKey: enMock.deleteButtonText,
            addButtonTextKey: enMock.addButtonText,
            defaultCenter: center,
        };
        fixture.componentRef.setInput('vm', vmWithCenter);
        const serviceSpy = jest.spyOn(service, 'initializeMap');

        //Act
        fixture.detectChanges();
        const mapCanvas = fixture.debugElement.query(
            By.directive(ElementRefDirective)
        );

        // Assert
        expect(serviceSpy).toHaveBeenCalledWith(
            mapCanvas.nativeElement,
            {
                center: center,
            },
            null
        );
    });

    // Unit test
    it('should initialize the map with the center of the target area', () => {
        //Arrange
        fixture.componentRef.setInput('vm', vm);
        const serviceSpy = jest.spyOn(service, 'initializeMap');
        const coords = [
            { lat: 1, lng: 1 },
            { lat: 2, lng: 2 },
            { lat: 3, lng: 3 },
        ];

        //Act
        fixture.debugElement
            .query(By.directive(MapAreaSelectFormControlComponent))
            .componentInstance.writeValue(coords);
        fixture.detectChanges();
        const mapCanvas = fixture.debugElement.query(
            By.directive(ElementRefDirective)
        );

        // Assert
        expect(serviceSpy).toHaveBeenCalledWith(
            mapCanvas.nativeElement,
            {
                center: { lat: 2.0002029184309347, lng: 1.9995936371374778 },
            },
            coords
        );
    });
});
