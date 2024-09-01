import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductItemComponent } from './product-item.component';
import { ProductItemComponentVM } from './product-item.component.vm';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;
  let compiled: HTMLElement;
  const vm: ProductItemComponentVM = {
    title: 'Controller',
    description:
      'The sleek sports car roared to life, its engine purring with power as it sped down the highway.',
    imageSrc: 'assets/lepke.jpg',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the inputs in the <p>, <img>, <h3> elements', () => {
    fixture.componentRef.setInput('vm', vm);
    fixture.detectChanges();

    const imgElement: HTMLElement | null = compiled.querySelector('img');
    expect(imgElement?.getAttribute('src')).toBe(vm.imageSrc);

    const h3Element: HTMLElement | null = compiled.querySelector('h3');
    expect(h3Element?.innerText).toBe(vm.title);

    const pElement: HTMLElement | null = compiled.querySelector('p');
    expect(pElement?.innerText).toBe(vm.description);
  });
});
