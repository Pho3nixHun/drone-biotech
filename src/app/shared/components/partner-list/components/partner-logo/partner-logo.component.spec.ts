import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PartnerLogoComponent } from './partner-logo.component';
import { PartnerLogoVM } from './partner-logo-vm.model';
import { getTranslocoModule } from 'transloco-testing.module';

const en = { altText: 'logo' };

describe('PartnerLogoComponent', () => {
  let fixture: ComponentFixture<PartnerLogoComponent>;
  let compiled: HTMLElement;
  const vm: PartnerLogoVM = {
    altTextKey: en.altText,
    imageSrc: 'assets/lepke.jpg',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PartnerLogoComponent,
        getTranslocoModule({
          langs: { en: en },
          translocoConfig: { availableLangs: ['en'], defaultLang: 'en' },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PartnerLogoComponent);
    compiled = fixture.debugElement.nativeElement;
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
