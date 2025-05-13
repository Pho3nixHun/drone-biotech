/* eslint-disable @typescript-eslint/no-empty-function */
import {
    Component,
    effect,
    ElementRef,
    forwardRef,
    inject,
    input,
    output,
    signal,
} from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import {
    ControlValueAccessor,
    FormBuilder,
    NG_VALUE_ACCESSOR,
    ReactiveFormsModule,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AutoCompleteService } from '@services/auto-complete/auto-complete.service';
import {
    debounceTime,
    distinctUntilChanged,
    filter,
    of,
    switchMap,
} from 'rxjs';
import { MapSearchInputFormControlVM } from './map-search-input-form-control.model';
import { Coordinates } from '@stores/location/location.model';
import { Place } from '@services/auto-complete/auto-complete.model';
import { TranslocoModule } from '@jsverse/transloco';
import { isNotNull } from '@utils/is-null.typeguard';
import { NgClass } from '@angular/common';
import { ElementRefDirective } from '@directives/element-ref/element-ref.directive';
import { ClickOutsideDirective } from '@directives/click-outside/click-outside.directive';

const noop = () => {};

@Component({
    selector: 'app-map-search-input-form-control',
    imports: [
        ReactiveFormsModule,
        MatIconModule,
        TranslocoModule,
        NgClass,
        ElementRefDirective,
        ClickOutsideDirective,
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MapSearchInputFormControlComponent),
            multi: true,
        },
    ],
    templateUrl: './map-search-input-form-control.component.html',
})
export class MapSearchInputFormControlComponent
    implements ControlValueAccessor
{
    private readonly service = inject(AutoCompleteService);
    private readonly fb = inject(FormBuilder);

    public readonly vm = input.required<MapSearchInputFormControlVM>();
    public readonly defaultCenter = input.required<Coordinates | null>();
    public readonly changeBounds = output<google.maps.LatLngBounds | null>();

    protected readonly selectedPlace = signal<Place | null>(null);
    protected readonly isOpened = signal<boolean>(false);
    protected readonly index = signal<number>(0);
    protected readonly searchInputSignal =
        signal<ElementRef<HTMLInputElement> | null>(null);

    protected readonly control = this.fb.control('');

    protected readonly placeSearchResults = toSignal(
        this.control.valueChanges.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            filter(isNotNull),
            switchMap((searchTerm) =>
                searchTerm.length > 0
                    ? this.service.getPlaces(searchTerm, this.defaultCenter())
                    : of([])
            )
        ),
        { initialValue: [] }
    );

    private readonly locationResource = rxResource({
        request: () => this.selectedPlace(),
        loader: ({ request }) =>
            request
                ? this.service.getLocationByPlaceId(request.placeId)
                : of(null),
        defaultValue: null,
    });

    private readonly selectedPlaceEffect = effect(() => {
        const place = this.locationResource.value();
        this.changeBounds.emit(place);
        this.onChange(place);
    });

    protected selectPlace(place: Place) {
        this.control.setValue(place.description);
        this.selectedPlace.set(place);
        this.searchInputSignal()?.nativeElement.blur();
        this.index.set(0);
        this.isOpened.set(false);
    }

    protected onArrowUp() {
        const index = this.index();
        if (index === 0) return;
        this.index.set(index - 1);
    }
    protected onArrowDown() {
        const index = this.index();
        const length = this.placeSearchResults().length;
        if (index + 1 === length) return;
        this.index.set(index + 1);
    }

    protected open() {
        this.isOpened.set(true);
        this.onTouched();
    }

    protected close = () => this.isOpened.set(false);

    public writeValue(place: Place) {
        this.selectedPlace.set(place);
    }

    private onChange: (value: google.maps.LatLngBounds | null) => void = noop;
    private onTouched: () => void = noop;

    public registerOnChange(
        fn: (value: google.maps.LatLngBounds | null) => void
    ): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }
}
