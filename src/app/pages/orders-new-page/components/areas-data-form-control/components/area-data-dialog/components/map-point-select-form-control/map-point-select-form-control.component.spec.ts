import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapPointSelectFormControlComponent } from './map-point-select-form-control.component';

describe('MapPointSelectFormControlComponent', () => {
  let component: MapPointSelectFormControlComponent;
  let fixture: ComponentFixture<MapPointSelectFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapPointSelectFormControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapPointSelectFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
