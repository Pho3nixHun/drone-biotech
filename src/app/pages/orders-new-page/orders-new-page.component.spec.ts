import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersNewPageComponent } from './orders-new-page.component';
import { getTranslocoModule } from 'transloco-testing.module';
import {
    provideOrdersNewPageMock,
    updateVMSignal,
} from './orders-new-page.service.mock';
import { enMock, ordersNewPageVMMock } from './orders-new-page.mock';
import { provideHttpClient } from '@angular/common/http';
import {
    provideMockDrawingControlOptions,
    provideMockGoogleMapsConfig,
    provideMockMapOptions,
    provideMockPolygonOptions,
} from '@components/maps/maps-vm.model';

describe('OrdersNewPageComponent', () => {
    let component: OrdersNewPageComponent;
    let fixture: ComponentFixture<OrdersNewPageComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                OrdersNewPageComponent,
                getTranslocoModule({
                    langs: { en: enMock },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
            providers: [
                provideOrdersNewPageMock(),
                provideMockMapOptions(),
                provideMockDrawingControlOptions(),
                provideMockPolygonOptions(),
                provideMockGoogleMapsConfig(),
                provideHttpClient(),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(OrdersNewPageComponent);
        compiled = fixture.debugElement.nativeElement;

        component = fixture.componentInstance;
    });

    //Snapshot testing
    it('should not render the template when the VM is not provided', () => {
        //Arrange
        updateVMSignal(undefined);
        //Act
        fixture.detectChanges();
        //Assert
        expect(compiled).toMatchSnapshot();
    });
    //Snapshot testing
    it('should render the template when the VM is provided', () => {
        //Arrange
        updateVMSignal(ordersNewPageVMMock);
        //Act
        fixture.detectChanges();
        //Assert
        expect(compiled).toMatchSnapshot();
    });

    it('should initialize the form control with empty value', () => {
        //Arrange
        //There is no need to arrange

        //Act
        //There is no need to act

        //Assert
        expect(
            component.coordinatesForm.get('coordinates')?.value
        ).toStrictEqual([]);
    });

    it('should disable the submit button if the coordinatesForm is invalid', () => {
        //Arrange
        updateVMSignal(ordersNewPageVMMock);

        //Act
        component.coordinatesForm
            .get('coordinates')
            ?.setValue([{ lat: 10, lng: 10 }]);
        fixture.detectChanges();

        //Assert
        const button = fixture.nativeElement.querySelector(
            'form button[type="submit"]'
        );
        expect(button.disabled).toBe(true);
    });

    it('should enable the submit button if the coordinatesForm is valid', () => {
        //Arrange
        updateVMSignal(ordersNewPageVMMock);

        //Act
        component.coordinatesForm.get('coordinates')?.setValue([
            { lat: 10, lng: 11 },
            { lat: 20, lng: 21 },
            { lat: 30, lng: 31 },
        ]);
        fixture.detectChanges();

        //Assert
        const button = fixture.nativeElement.querySelector(
            'button[type="submit"]'
        );
        expect(button.disabled).toBe(false);
    });
});
