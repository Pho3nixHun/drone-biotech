import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapPointSelectFormControlComponent } from './map-point-select-form-control.component';
import {
    MapPointSelectFormControlVM,
    provideMockEntryPointMarkerOptions,
} from './map-point-select-form-control.model';
import { provideMockMapOptions } from '../map-area-select-form-control/map-area-select-form-control.model';
import { getTranslocoModule } from 'transloco-testing.module';
import { Component, DebugElement, input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MapPointSelectFormControlService } from './map-point-select-form-control.service';
import {
    provideMapPointSelectFormControlMockService,
    updateEntryPointSignal,
} from './map-point-select-form-control.service.mock';
import { ElementRefDirective } from '@directives/element-ref.directive';
import {
    provideMockHeadOfficeLocation,
    updateHeadOfficeLocation,
} from '@services/distance/distance.model';

const enMock = { addButtonText: 'addButton', deleteButtonText: 'deleteButton' };

const vm: MapPointSelectFormControlVM = {
    deleteButtonTextKey: enMock.deleteButtonText,
    addButtonTextKey: enMock.addButtonText,
    defaultCenter: null,
};
const headOfficeLocation = { lat: 10, lng: 10 };

@Component({
    template: `<app-map-point-select-form-control [vm]="vm()" />`,
})
class TestHostComponent {
    public vm = input.required<MapPointSelectFormControlVM>();
}

describe('MapPointSelectFormControlComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let compiled: HTMLElement;
    let mockService: MapPointSelectFormControlService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                MapPointSelectFormControlComponent,
                getTranslocoModule({
                    langs: { en: enMock },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
            providers: [
                provideMockEntryPointMarkerOptions(),
                provideMockMapOptions(),
                provideMockHeadOfficeLocation(),
                provideMapPointSelectFormControlMockService(),
            ],
            declarations: [TestHostComponent],
        }).compileComponents();
        updateHeadOfficeLocation(headOfficeLocation);

        fixture = TestBed.createComponent(TestHostComponent);
        mockService = TestBed.inject(MapPointSelectFormControlService);
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

    //  test
    it('should disable to add new entry point to the map if one is already drawn', () => {
        // Arrange
        fixture.componentRef.setInput('vm', vm);
        updateEntryPointSignal({ lat: 10, lng: 10 });

        // Act
        fixture.detectChanges();
        const addButton: DebugElement = fixture.debugElement.query(
            By.css('button.btn-disabled')
        );

        // Assert
        expect(addButton.nativeElement.disabled).toBe(true);
    });

    //  test
    it('should enable to add new entry point to the map if no entry point is drawn', () => {
        // Arrange
        fixture.componentRef.setInput('vm', vm);
        updateEntryPointSignal(null);

        // Act
        fixture.detectChanges();
        const addButton: DebugElement = fixture.debugElement.query(
            By.css('button.btn-primary')
        );

        // Assert
        expect(addButton.nativeElement.disabled).toBe(false);
    });

    it('should disable to delete entry point if there is no entry point drawn ', () => {
        // Arrange
        fixture.componentRef.setInput('vm', vm);
        updateEntryPointSignal(null);

        // Act
        fixture.detectChanges();
        const deleteButton: DebugElement = fixture.debugElement.query(
            By.css('button.btn-disabled')
        );

        // Assert
        expect(deleteButton.nativeElement.disabled).toBe(true);
    });

    it('should enable to delete entry point if there is an entry point drawn ', () => {
        // Arrange
        fixture.componentRef.setInput('vm', vm);
        updateEntryPointSignal({ lat: 10, lng: 10 });

        // Act
        fixture.detectChanges();
        const deleteButton: DebugElement = fixture.debugElement.query(
            By.css('button.btn-error')
        );

        // Assert
        expect(deleteButton.nativeElement.disabled).toBe(false);
    });

    // Interaction test
    it('should call drawMarker(null) when the addButton is clicked if there is no entry point drawn', () => {
        //Arrange
        fixture.componentRef.setInput('vm', vm);
        updateEntryPointSignal(null);

        //Act
        fixture.detectChanges();
        const serviceSpy = jest.spyOn(mockService, 'drawMarker');
        fixture.debugElement
            .query(By.css('button'))
            .triggerEventHandler('click', null);

        //Assert
        expect(serviceSpy).toHaveBeenCalledWith(null);
    });

    // Interaction test
    it('should call deleteMarker() when the deleteButton is clicked if there is an entry point a drawn', () => {
        //Arrange
        fixture.componentRef.setInput('vm', vm);
        updateEntryPointSignal({ lat: 10, lng: 10 });
        const serviceSpy = jest.spyOn(mockService, 'deleteMarker');

        //Act
        fixture.detectChanges();
        fixture.debugElement
            .query(By.css('button.btn-error'))
            .triggerEventHandler('click', null);

        //Assert
        expect(serviceSpy).toHaveBeenCalledTimes(1);
    });

    // Unit test
    it('should initialize the map with the headOfficeLocation if the defaultCenter is not available', () => {
        //Arrange
        fixture.componentRef.setInput('vm', vm);
        const serviceSpy = jest.spyOn(mockService, 'initializeMap');

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
    it('should initialize the map with the defaultCenter if there is no entryPoint', () => {
        //Arrange
        const center = { lat: 30, lng: 30 };
        const vmWithCenter: MapPointSelectFormControlVM = {
            deleteButtonTextKey: enMock.deleteButtonText,
            addButtonTextKey: enMock.addButtonText,
            defaultCenter: center,
        };
        fixture.componentRef.setInput('vm', vmWithCenter);
        const serviceSpy = jest.spyOn(mockService, 'initializeMap');

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

    //Unit test
    it('should initialize the map with the entryPoint as a center and as an entry point', () => {
        //Arrange
        fixture.componentRef.setInput('vm', vm);
        const center = { lat: 1, lng: 1 };
        const serviceSpy = jest.spyOn(mockService, 'initializeMap');

        //Act
        fixture.debugElement
            .query(By.directive(MapPointSelectFormControlComponent))
            .componentInstance.writeValue(center);
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
            center
        );
    });
});
