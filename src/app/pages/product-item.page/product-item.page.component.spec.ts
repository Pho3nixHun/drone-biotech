import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemPageComponent } from './product-item.page.component';

describe('ProductItemPageComponent', () => {
  let component: ProductItemPageComponent;
  let fixture: ComponentFixture<ProductItemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductItemPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
