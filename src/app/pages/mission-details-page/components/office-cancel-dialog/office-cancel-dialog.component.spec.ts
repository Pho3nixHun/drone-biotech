import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeCancelDialogComponent } from './office-cancel-dialog.component';

describe('OfficeCancelDialogComponent', () => {
  let component: OfficeCancelDialogComponent;
  let fixture: ComponentFixture<OfficeCancelDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficeCancelDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeCancelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
