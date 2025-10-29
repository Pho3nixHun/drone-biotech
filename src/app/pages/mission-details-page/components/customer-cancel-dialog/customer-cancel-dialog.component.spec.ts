import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCancelDialogComponent } from './customer-cancel-dialog.component';

describe('CustomerCancelDialogComponent', () => {
  let component: CustomerCancelDialogComponent;
  let fixture: ComponentFixture<CustomerCancelDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerCancelDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerCancelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
