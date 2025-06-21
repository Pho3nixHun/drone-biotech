import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryItemListComponent } from './summary-item-list.component';

describe('SummaryItemListComponent', () => {
  let component: SummaryItemListComponent;
  let fixture: ComponentFixture<SummaryItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryItemListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
