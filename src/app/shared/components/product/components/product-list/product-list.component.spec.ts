import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { AppRouteSegment } from 'src/app/app-route-segment';
import { ProductListComponentVM } from './product-list.component.vm';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let compiled: HTMLElement;
  const vm: ProductListComponentVM = {
    productItems: [
      {
        title: 'Controller',
        description: 'Description',
        imageSrc: 'test.jpg',
      },
      {
        title: 'RTU',
        description: 'Description',
        imageSrc: 'test.jpg',
      },
      {
        title: 'Cloud and Mobile',
        description: 'Description',
        imageSrc: 'test.jpg',
      },
    ],
    link: AppRouteSegment.PRODUCT,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the <app-product-item> elements', () => {
    fixture.componentRef.setInput('vm', vm);
    fixture.detectChanges();
    const appProductItemElements = compiled.querySelectorAll('app-product-item');
    expect(appProductItemElements.length).toEqual(vm.productItems.length);
  });
});
