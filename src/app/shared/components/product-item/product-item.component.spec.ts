import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductItemComponent } from './product-item.component';
import { ProductItemVM } from './product-item-vm.model';
import { getTranslocoModule } from 'transloco-testing.module';

const en = {
  title: 'Controller',
  description:
    'The sleek sports car roared to life, its engine purring with power as it sped down the highway.',
};

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;
  let compiled: HTMLElement;
  const vm: ProductItemVM = {
    id: 1,
    titleKey: 'Controller',
    descriptionKey:
      'The sleek sports car roared to life, its engine purring with power as it sped down the highway.',
    imageSrc: 'assets/lepke.jpg',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProductItemComponent,
        getTranslocoModule({
          langs: { en },
          translocoConfig: { availableLangs: ['en'], defaultLang: 'en' },
        }),
      ],
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
    expect(h3Element?.innerText).toBe(en.title);

    const pElement: HTMLElement | null = compiled.querySelector('p');
    expect(pElement?.innerText).toBe(en.description);
  });
});
