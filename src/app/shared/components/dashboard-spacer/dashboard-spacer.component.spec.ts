import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSpacerComponent } from './dashboard-spacer.component';

describe('DashboardSpacerComponent', () => {
  let component: DashboardSpacerComponent;
  let fixture: ComponentFixture<DashboardSpacerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardSpacerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSpacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
