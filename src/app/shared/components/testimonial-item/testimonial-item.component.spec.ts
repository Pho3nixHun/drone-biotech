import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestimonialItemComponent } from './testimonial-item.component';
import { TestimonialItemVM } from './testimonial-item-vm.model';
import { getTranslocoModule } from 'transloco-testing.module';

const en = { message: 'Hello', roleAndCompany: 'World' };

describe('TestimonialItemComponent', () => {
  let component: TestimonialItemComponent;
  let fixture: ComponentFixture<TestimonialItemComponent>;
  let compiled: HTMLElement;
  const vm: TestimonialItemVM = {
    messageKey: en.message,
    name: 'Emily Johnson',
    roleAndCompanyKey: en.roleAndCompany,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TestimonialItemComponent,
        getTranslocoModule({
          langs: { en },
          translocoConfig: { availableLangs: ['en'], defaultLang: 'en' },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestimonialItemComponent);
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

  //Snapshot test
  it('should get the input data and visualize it', () => {
    //Arrange
    fixture.componentRef.setInput('vm', vm);

    //Act
    fixture.detectChanges();

    //Assert
    expect(compiled).toMatchSnapshot();
  });
});
