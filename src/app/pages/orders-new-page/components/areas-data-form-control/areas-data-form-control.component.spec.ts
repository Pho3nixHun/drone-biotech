import { By } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { getTranslocoModule } from 'transloco-testing.module';
import { AreasDataFormControlComponent } from './areas-data-form-control.component';
import { enMock, ordersNewPageVMMock } from '../../orders-new-page.mock';
import { DialogServiceMock } from '@services/dialog/dialog.service.mock';
import { DialogService } from '@services/dialog/dialog.service';
import { DeleteDialogReason } from './components/delete-dialog/delete-dialog.model';
import {
    provideMockDistanceService,
    updateDistance,
} from '@services/distance/distance.service.mock';
import { AreaData } from './areas-data-form-control.model';
import {
    provideMockReverseGeocodingService,
    updateAddressSignal,
} from '@services/reverse-geocoding/reverse-geocoding.service.mock';
import {
    AreaDataDialogResultWithAreaData,
    AreaDataDialogResultWithoutAreaData,
} from './components/area-data-dialog/area-data-dialog.model';
import { METRES_TO_KILOMETERS } from '@stores/location/location.model';
import {
    provideMockHeadOfficeLocation,
    provideMockMapOptions,
} from '@providers/google-maps-provider';
import { provideStore } from '@ngrx/store';

const areaData = [
    {
        applicationDate: new Date(100),
        dosePerHq: 2,
        entryPoint: { lat: 10, lng: 10 },
        id: 'id',
        targetArea: [
            { lat: 10, lng: 10 },
            { lat: 20, lng: 20 },
            { lat: 30, lng: 30 },
        ],
        comment: 'comment',
        missionName: 'mission',
    },
];
@Component({
    template: `
        <form [formGroup]="form">
            <app-areas-data-form-control
                formControlName="areaData"
                [vm]="vm"
            ></app-areas-data-form-control>
        </form>
    `,
    imports: [AreasDataFormControlComponent, ReactiveFormsModule],
})
class TestHostComponent {
    public vm = ordersNewPageVMMock.frameXVM.areasDataFormControlVM;
    public form = new FormGroup({
        areaData: new FormControl<AreaData[]>(areaData),
    });
}

describe('AreasDataFormControlComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let debugEl: DebugElement;
    let compiled: HTMLElement;
    let component: AreasDataFormControlComponent;
    let dialogService: DialogService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                TestHostComponent,
                getTranslocoModule({
                    langs: { en: enMock },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
            providers: [
                provideHttpClient(),
                provideMockHeadOfficeLocation(),
                provideMockReverseGeocodingService(),
                provideMockDistanceService(),
                provideMockMapOptions(),
                provideStore(),
            ],
        }).compileComponents();
        TestBed.overrideProvider(DialogService, {
            useFactory: () => new DialogServiceMock(),
        });

        fixture = TestBed.createComponent(TestHostComponent);

        debugEl = fixture.debugElement.query(
            By.directive(AreasDataFormControlComponent)
        );
        dialogService = debugEl.injector.get(DialogService);
        component = debugEl.componentInstance;
        compiled = debugEl.nativeElement;
    });

    // Snapshot test
    it('should render the template when the VM is provided', () => {
        //Arrange

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    xit('should match snapshot when xAreaData$ has data', () => {});

    // Unit test
    it('should correctly write with the writeValue to the areaData from the form', () => {
        //Arrange

        //Act
        fixture.detectChanges();

        //Assert
        expect(component['areaData']()).toEqual(areaData);
    });

    // Unit test
    it('should correctly calculate the totalDistanceFromHeadOffice from meters to kilometers', async () => {
        // Arrange
        const distanceInMetres = 10000;
        const distanceInKm = distanceInMetres / METRES_TO_KILOMETERS;
        updateDistance(distanceInMetres);

        // Act
        const data = await component['totalAreaXData$']();

        // Assert
        return data
            ? expect(data.totalDistanceFromHeadOffice).toEqual(distanceInKm)
            : expect(data).toBe(null);
    });

    // Unit test
    it('should correctly calculate the totalTargetAreaSize from square metres to hectare', async () => {
        // Arrange

        // Act
        const data = await component['totalAreaXData$']();

        // Assert
        return data
            ? expect(data.totalTargetAreaSize).toEqual(3689255.654068359)
            : expect(data).toBe(null);
    });

    // Unit test
    it('should receive the formattedAddress from the service', async () => {
        // Arrange
        updateAddressSignal('Debrecen');

        // Act
        const data = await component['xAreaData$']();

        // Assert
        return data
            ? expect(data[0].entryPointAddress).toEqual('Debrecen')
            : expect(data).toBe(null);
    });

    // Unit test
    it('should put the response data of the dialog to the areaData if the reasonType is submit when the addAreaData() method is called', async () => {
        //Arrange

        jest.spyOn(dialogService, 'create').mockReturnValue({
            result$: of<AreaDataDialogResultWithAreaData>({
                reasonType: 'submit',
                type: 'areaDataDialogResultWithAreaData',
                areaData: {
                    applicationDate: new Date(1),
                    dosePerHq: 1,
                    entryPoint: { lat: 1, lng: 1 },
                    id: 'id',
                    targetArea: [{ lat: 1, lng: 1 }],
                    comment: 'comment',
                    missionName: 'mission',
                },
            }),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any);

        //Act
        fixture.detectChanges();
        await component['addAreaData']();

        // Assert
        expect(component['areaData']().length).toEqual(2);
    });

    // Unit test
    it('should not put the response data of the dialog to the areaData if the reasonType is cancel when the addAreaData() method is called', async () => {
        //Arrange
        jest.spyOn(dialogService, 'create').mockReturnValue({
            result$: of<AreaDataDialogResultWithoutAreaData>({
                reasonType: 'cancel',
            }),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any);

        //Act
        fixture.detectChanges();
        await component['addAreaData']();

        // Assert
        expect(component['areaData']().length).toEqual(1);
    });

    // Unit test
    it('should delete the area from the areaData if the reasonType is submit when the deleteAreaData() method is called', async () => {
        //Arrange
        jest.spyOn(dialogService, 'create').mockReturnValue({
            result$: of<DeleteDialogReason>({
                reasonType: 'submit',
                type: 'deleteDialogReason',
            }),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any);

        //Act
        fixture.detectChanges();
        await component['deleteAreaData']('id');

        // Assert
        expect(component['areaData']().length).toEqual(0);
    });

    // Unit test
    it('should not delete the area from the areaData if the reasonType is cancel when the deleteAreaData() method is called', async () => {
        //Arrange
        jest.spyOn(dialogService, 'create').mockReturnValue({
            result$: of<DeleteDialogReason>({
                reasonType: 'cancel',
                type: 'deleteDialogReason',
            }),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any);

        // Act
        fixture.detectChanges();
        await component['deleteAreaData']('id');

        // Assert
        expect(component['areaData']().length).toEqual(1);
    });

    // Unit test
    it('should edit the area from the areaData if the reasonType is submit when the editAreaData() method is called', async () => {
        // Arrange
        const response: AreaDataDialogResultWithAreaData = {
            reasonType: 'submit',
            type: 'areaDataDialogResultWithAreaData',
            areaData: {
                applicationDate: new Date(1),
                dosePerHq: 1,
                entryPoint: { lat: 1, lng: 1 },
                id: 'id',
                targetArea: [{ lat: 1, lng: 1 }],
                comment: 'comment',
                missionName: 'mission',
            },
        };
        jest.spyOn(dialogService, 'create').mockReturnValue({
            result$: of(response),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any);

        // Act
        fixture.detectChanges();
        await component['editAreaData']('id');

        // Assert
        expect(component['areaData']()[0]).toEqual(response.areaData);
    });

    // Unit test
    it('should not edit the area from the areaData if the reasonType is cancel when the editAreaData() method is called', async () => {
        //Arrange
        jest.spyOn(dialogService, 'create').mockReturnValue({
            result$: of<AreaDataDialogResultWithoutAreaData>({
                reasonType: 'cancel',
            }),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any);

        //Act
        fixture.detectChanges();
        await component['editAreaData']('id');

        // Assert
        expect(component['areaData']()[0]).toEqual(areaData[0]);
    });
});
