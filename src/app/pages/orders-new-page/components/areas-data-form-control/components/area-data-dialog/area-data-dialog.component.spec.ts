import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDataDialogComponent } from './area-data-dialog.component';

describe('AreaDataDialogComponent', () => {
  let component: AreaDataDialogComponent;
  let fixture: ComponentFixture<AreaDataDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaDataDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
