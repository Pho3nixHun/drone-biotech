import {
    ComponentFixture,
    fakeAsync,
    TestBed,
    tick,
} from '@angular/core/testing';
import { provideMockMapOptions } from '../../map-form-control.model';
import { getTranslocoModule } from 'transloco-testing.module';
import { Component, DebugElement, inject, input, signal } from '@angular/core';
import { MapSearchInputFormControlVM } from './map-search-input-form-control.model';
import { MapSearchInputFormControlComponent } from './map-search-input-form-control.component';
import { enMock } from 'src/app/pages/orders-new-page/orders-new-page.mock';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Place } from '@services/auto-complete/auto-complete.model';
import { By } from '@angular/platform-browser';
import { provideAutoCompleteServiceMock } from '@services/auto-complete/auto-complete.service.mock';
import { Coordinates } from '@stores/location/location.model';

const en = {
    placeholder: 'place',
    distanceValue: 'distance',
};

const mockVM = {
    placeholderKey: en.placeholder,
    distanceValueKey: en.distanceValue,
};

const center = { lat: 10, lng: 10 };

const place = {
    description: 'description',
    distance: 1000,
    placeId: 'id',
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

@Component({
    imports: [MapSearchInputFormControlComponent, ReactiveFormsModule],
    template: `
        <app-map-search-input-form-control
            [vm]="vm()"
            [defaultCenter]="defaultCenter()"
            [formControl]="form"
            (changeBounds)="setMapBounds($event)"
        />
    `,
})
class TestHostComponent {
    private readonly fb = inject(FormBuilder);
    public vm = input.required<MapSearchInputFormControlVM>();
    public defaultCenter = input.required<Coordinates>();
    public bounds = signal<google.maps.LatLng | null>(null);
    public form = this.fb.control<Place | null>(null, Validators.required);
    public setMapBounds(bounds: google.maps.LatLng) {
        this.bounds.set(bounds);
    }
}

describe('MapSearchInputFormControlComponent', () => {
    let mapSearchInputFormControlComponent: MapSearchInputFormControlComponent;
    let component: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;
    let compiled: HTMLElement;
    let innerDebugElement: DebugElement;

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
                provideMockMapOptions(),
                provideAutoCompleteServiceMock(),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        fixture.componentRef.setInput('defaultCenter', center);
        fixture.componentRef.setInput('vm', mockVM);
        component = fixture.componentInstance;
        innerDebugElement = fixture.debugElement.query(
            By.directive(MapSearchInputFormControlComponent)
        );
        mapSearchInputFormControlComponent =
            innerDebugElement.componentInstance;
        compiled = innerDebugElement.nativeElement;
    });

    // Snapshot testing
    it('should render the template correctly when the VM is provided', () => {
        // Arrange

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Unit testing
    it('should write a null value to the CVA', () => {
        // There is no need to arrange

        // There is no need to act

        // Assert
        expect(mapSearchInputFormControlComponent['selectedPlace']()).toBe(
            null
        );
    });

    // Unit testing
    it('should write a Place value to the CVA', () => {
        // Arrange
        const val = {
            description: 'desc',
            distance: 100,
            placeId: 'id',
        };
        component.form.setValue(val);

        // Act
        fixture.detectChanges();

        // Assert
        expect(mapSearchInputFormControlComponent['selectedPlace']()).toBe(val);
    });

    // Snapshot testing
    xit(
        'should render the search options after the control value changes',
        noop
    );

    // Unit testing
    xit('should fetch the location of the place with the service and emit it via output if there is a selected place', async () => {
        // Arrange
        mapSearchInputFormControlComponent['selectedPlace'].set({
            description: 'Budapest',
            distance: 1000,
            placeId: 'id',
        });

        await fixture.whenStable();
    });

    it('should set the value of the search input signal by the ElementRefDirective', () => {
        // There is no need to arrange

        // Act
        fixture.detectChanges();

        // Assert
        expect(
            typeof mapSearchInputFormControlComponent['searchInputSignal']()
        ).toBe('object');
    });

    it('should the selectPlace(place) function set the control value, index, isOpened, selectedPlace', () => {
        // Arrange
        fixture.detectChanges();
        const searchInput =
            mapSearchInputFormControlComponent['searchInputSignal']()
                ?.nativeElement;
        const blurSpy = searchInput ? jest.spyOn(searchInput, 'blur') : null;
        mapSearchInputFormControlComponent['selectPlace'](place);

        // There is no need to act

        // Assert
        expect(mapSearchInputFormControlComponent['control'].value).toBe(
            place.description
        );
        expect(mapSearchInputFormControlComponent['index']()).toBe(0);
        expect(mapSearchInputFormControlComponent['isOpened']()).toBe(false);
        expect(mapSearchInputFormControlComponent['selectedPlace']()).toBe(
            place
        );
        expect(typeof blurSpy).toBe('function');
        if (blurSpy) expect(blurSpy).toHaveBeenCalled();
    });

    describe('when form is set with a valid value', () => {
        beforeEach(fakeAsync(() => {
            mapSearchInputFormControlComponent['control'].setValue('budapest');
            fixture.detectChanges();
            tick(300);
        }));

        // Unit testing
        it('should fetch the places with the service', fakeAsync(() => {
            // There is no need to arrange

            // There is no need to act

            // Assert
            expect(
                mapSearchInputFormControlComponent['placeSearchResults']()
            ).toStrictEqual([
                { description: 'Budapest', distance: 23, placeId: 'id1' },
                {
                    description: 'Budapest, Parlament',
                    distance: 25,
                    placeId: 'id2',
                },
            ]);
        }));

        describe('when the user interacts with the input', () => {
            let searchInput: HTMLInputElement | undefined;
            let arrowDown: KeyboardEvent;
            let arrowUp: KeyboardEvent;
            let enter: KeyboardEvent;
            beforeEach(() => {
                // Arrange
                searchInput =
                    mapSearchInputFormControlComponent['searchInputSignal']()
                        ?.nativeElement;
                arrowDown = new KeyboardEvent('keyup', {
                    key: 'ArrowDown',
                });
                arrowUp = new KeyboardEvent('keyup', {
                    key: 'ArrowUp',
                });
                enter = new KeyboardEvent('keydown', {
                    key: 'Enter',
                });
            });

            // Unit testing
            it('should set the place after push the Enter key on the input field', () => {
                if (searchInput) {
                    // Act
                    searchInput.focus();
                    searchInput.dispatchEvent(enter);

                    // Assert
                    expect(
                        mapSearchInputFormControlComponent['selectedPlace']()
                    ).toStrictEqual({
                        description: 'Budapest',
                        distance: 23,
                        placeId: 'id1',
                    });
                }
            });

            // Unit testing
            it('should set the index after navigate with the ArrowDown key', () => {
                if (searchInput) {
                    // Act
                    searchInput.focus();
                    searchInput.dispatchEvent(arrowDown);

                    // Assert
                    expect(mapSearchInputFormControlComponent['index']()).toBe(
                        1
                    );
                }
            });

            // Unit testing
            it('should set the index after navigate with the ArrowUp key', () => {
                if (searchInput) {
                    // Act
                    searchInput.focus();
                    searchInput.dispatchEvent(arrowDown);
                    searchInput.dispatchEvent(arrowUp);

                    // Assert
                    expect(mapSearchInputFormControlComponent['index']()).toBe(
                        0
                    );
                }
            });

            // Unit testing
            it('should set the index with 0 value at least after navigate with the ArrowUp key', () => {
                if (searchInput) {
                    // Act
                    searchInput.focus();
                    searchInput.dispatchEvent(arrowUp);
                    searchInput.dispatchEvent(arrowUp);

                    // Assert
                    expect(mapSearchInputFormControlComponent['index']()).toBe(
                        0
                    );
                }
            });
            // Unit testing
            it('should set the index with length of the searchPlaceResults at max after navigate with the ArrowUp key', () => {
                if (searchInput) {
                    // Act
                    searchInput.focus();
                    searchInput.dispatchEvent(arrowDown);
                    searchInput.dispatchEvent(arrowDown);
                    searchInput.dispatchEvent(arrowDown);

                    // Assert
                    expect(mapSearchInputFormControlComponent['index']()).toBe(
                        1
                    );
                }
            });
        });
    });
});
