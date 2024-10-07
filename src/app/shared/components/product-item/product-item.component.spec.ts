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
    titleKey: en.title,
    descriptionKey: en.description,
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

  //Snapshot test
  it('should not render the template when there is not VM provided', () => {
    //Arrange

    //Act

    //Assert
    expect(compiled).toMatchSnapshot();
  });

  it('should render the template correctly when there is a VM provided', () => {
    //Arrange
    fixture.componentRef.setInput('vm', vm);

    //Act
    fixture.detectChanges();

    //Assert
    expect(compiled).toMatchSnapshot();
  });
});
