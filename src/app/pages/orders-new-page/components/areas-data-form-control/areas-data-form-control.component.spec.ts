import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasDataFormControlComponent } from './areas-data-form-control.component';

describe('AreasDataFormControlComponent', () => {
  let component: AreasDataFormControlComponent;
  let fixture: ComponentFixture<AreasDataFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreasDataFormControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreasDataFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
