import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsPageComponent } from './products-page.component';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductsPageComponent', () => {
  let component: ProductsPageComponent;
  let fixture: ComponentFixture<ProductsPageComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsPageComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create only one <app-product-item>', () => {
    component.productId$ = of(0);
    fixture.detectChanges();
    const productItems = compiled.querySelectorAll('app-product-item');
    expect(productItems.length).toBe(1);
  });

  it('should create all the three <app-product-item>-s', () => {
    component.productId$ = of(null);
    fixture.detectChanges();
    const productItems = compiled.querySelectorAll('app-product-item');
    expect(productItems.length).toBe(3);
  });
});
