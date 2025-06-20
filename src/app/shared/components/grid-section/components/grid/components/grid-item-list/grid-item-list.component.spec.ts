import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridItemListComponent } from './grid-item-list.component';

describe('GridItemListComponent', () => {
  let component: GridItemListComponent;
  let fixture: ComponentFixture<GridItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridItemListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
