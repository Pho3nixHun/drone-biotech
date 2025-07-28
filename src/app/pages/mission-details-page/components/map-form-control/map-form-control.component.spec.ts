import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapFormControlComponent } from './map-form-control.component';
import { Component, DebugElement, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Coordinates } from '@stores/location/location.model';
import { provideMockMapOptions } from 'src/app/shared/providers/google-maps-provider';
import { MapAreaSelectService } from './components/map-area-select-form-control/map-area-select.service';
import { MapAreaSelectMockService } from './components/map-area-select-form-control/map-area-select-mock.service';
import { MapPointSelectService } from './components/map-point-select-form-control/map-point-select.service';
import { MapPointSelectMockService } from './components/map-point-select-form-control/map-point-select-mock.service';

@Component({
    imports: [MapFormControlComponent, ReactiveFormsModule],
    template: ` <app-map-form-control [formControl]="control" /> `,
})
class TestHostComponent {
    private readonly fb = inject(FormBuilder);
    public control = this.fb.control<{
        targetArea: Coordinates[] | null;
        entryPoint: Coordinates | null;
    }>(
        {
            targetArea: null,
            entryPoint: null,
        },
        Validators.required
    );
}
describe('MapFormControlComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let component: MapFormControlComponent;
    let debugElement: DebugElement;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestHostComponent],
            providers: [provideMockMapOptions()],
        }).compileComponents();
        TestBed.overrideProvider(MapAreaSelectService, {
            useFactory: () => new MapAreaSelectMockService(),
        });
        TestBed.overrideProvider(MapPointSelectService, {
            useFactory: () => new MapPointSelectMockService(),
        });
        fixture = TestBed.createComponent(TestHostComponent);
        debugElement = fixture.debugElement.query(
            By.directive(MapFormControlComponent)
        );
        component = debugElement.componentInstance;
        compiled = debugElement.nativeElement;
    });

    // Snapshot testing
    it('should render the template correctly', () => {
        // Arrange

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    // Unit testing
    it('should set the mapSignal as a map', () => {
        // Arrange

        // Act
        fixture.detectChanges();

        // Assert
        expect(component['mapSignal']()).toBeTruthy();
    });
});
