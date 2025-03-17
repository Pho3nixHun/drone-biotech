import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAreaSelectFormControlComponent } from './map-area-select-form-control.component';

describe('MapAreaSelectFormControlComponent', () => {
  let component: MapAreaSelectFormControlComponent;
  let fixture: ComponentFixture<MapAreaSelectFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapAreaSelectFormControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapAreaSelectFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
