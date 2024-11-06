import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestimonialItemComponent } from './testimonial-item.component';
import { TestimonialItemVM } from './testimonial-item-vm.model';
import { getTranslocoModule } from 'transloco-testing.module';

const en = { message: 'Hello', roleAndCompany: 'World' };

describe('TestimonialItemComponent', () => {
    let fixture: ComponentFixture<TestimonialItemComponent>;
    let compiled: HTMLElement;
    const vm: TestimonialItemVM = {
        messageKey: 'altText',
        name: 'Emily Johnson',
        roleAndCompanyKey: 'roleAndCompany',
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                TestimonialItemComponent,
                getTranslocoModule({
                    langs: { en },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(TestimonialItemComponent);
        compiled = fixture.debugElement.nativeElement;
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
