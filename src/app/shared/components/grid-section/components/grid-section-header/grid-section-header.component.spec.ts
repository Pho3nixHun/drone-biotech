import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSectionHeaderComponent } from './grid-section-header.component';

describe('GridSectionHeaderComponent', () => {
  let component: GridSectionHeaderComponent;
  let fixture: ComponentFixture<GridSectionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridSectionHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridSectionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
