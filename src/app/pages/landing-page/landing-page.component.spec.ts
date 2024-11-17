import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingPageComponent } from './landing-page.component';
import { getTranslocoModule } from 'transloco-testing.module';
import {
    enLandingMock,
    landingPageVMMock,
    landingPageVMMockWithRoutes,
    landingPageVMWithFiveFramesMock,
    landingPageVMWithFivePartnerLogoXMock,
    landingPageVMWithFiveProductItemMock,
    landingPageVMWithFiveTestimonialMock,
    landingPageVMWithOneFrameMock,
    landingPageVMWithOnePartnerLogoXMock,
    landingPageVMWithOneProductItemMock,
    landingPageVMWithOneTestimonialMock,
    landingPageVMWithOnlyContactFrameMock,
    landingPageVMWithOnlyPartnerFrameMock,
    landingPageVMWithOnlyProductFrameMock,
    landingPageVMWithoutFrameMock,
    landingPageVMWithoutHeroXVM,
    landingPageVMWithoutPartnerLogoXMock,
    landingPageVMWithoutProductItemMock,
    landingPageVMWithoutTestimonialMock,
} from './landing-page.mock';
import { provideSwiperTestingModule } from '@modules/swiper/swiper-testing.module';
import {
    provideLandingPageMockService,
    updateGetVMSignal,
} from './landing-page.service.mock';
import { provideRouter } from '@angular/router';

describe('LandingPageComponent', () => {
    let fixture: ComponentFixture<LandingPageComponent>;
    let compiled: HTMLElement;
    let component: LandingPageComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                LandingPageComponent,
                getTranslocoModule({
                    langs: { enLandingMock },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
            providers: [
                provideLandingPageMockService(),
                provideSwiperTestingModule(),
                provideRouter([]),
            ],
        }).compileComponents();
        updateGetVMSignal(undefined);
        fixture = TestBed.createComponent(LandingPageComponent);
        fixture.detectChanges();
        component = fixture.componentInstance;
        compiled = fixture.debugElement.nativeElement;
    });

    //Snapshot test
    it('should render loading state without VM', () => {
        // Arrange
        /* No need to set VM as it is undefined by default */
        // Act
        /* No need to act on nothing */
        // Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should render the template when there is a VM provided', () => {
        // Arrange
        updateGetVMSignal(landingPageVMMock);
        // Act
        fixture.detectChanges();
        // Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should not render the hero section when the heroXVM is not provided', () => {
        // Arrange
        updateGetVMSignal(landingPageVMWithoutHeroXVM);
        // Act
        fixture.detectChanges();
        // Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should render the hero section when the heroXVM is provided', () => {
        // Arrange
        updateGetVMSignal(landingPageVMMock);
        // Act
        fixture.detectChanges();
        // Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should not render frames when 0 frame is provided', () => {
        // Arrange
        updateGetVMSignal(landingPageVMWithoutFrameMock);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should render 1 frame when 1 frame is provided', () => {
        // Arrange
        updateGetVMSignal(landingPageVMWithOneFrameMock);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should render 5 frames in order when 5 frames are provided', () => {
        // Arrange
        updateGetVMSignal(landingPageVMWithFiveFramesMock);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should render only product frames when only product frames are provided', () => {
        // Arrange
        updateGetVMSignal(landingPageVMWithOnlyProductFrameMock);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should render only partner frames when only partner frames are provided', () => {
        // Arrange
        updateGetVMSignal(landingPageVMWithOnlyPartnerFrameMock);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should render only contact frames when only contact frames are provided', () => {
        // Arrange
        updateGetVMSignal(landingPageVMWithOnlyContactFrameMock);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should not render <app-product-item> when 0 is provided', () => {
        // Arrange
        updateGetVMSignal(landingPageVMWithoutProductItemMock);

        // Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should render 1 <app-product-item> when 1 is provided', () => {
        // Arrange
        updateGetVMSignal(landingPageVMWithOneProductItemMock);

        // Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should render 5 <app-product-item> in order when 5 <app-product-item>  are provided', () => {
        // Arrange
        updateGetVMSignal(landingPageVMWithFiveProductItemMock);

        // Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should have the correct routerLinks on product-items', () => {
        // Arrange
        updateGetVMSignal(landingPageVMMockWithRoutes);

        // Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should not render <app-partner-logo> when 0 is provided', () => {
        // Arrange
        updateGetVMSignal(landingPageVMWithoutPartnerLogoXMock);

        // Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should render 1 <app-partner-logo> when 1 is provided', () => {
        // Arrange
        updateGetVMSignal(landingPageVMWithOnePartnerLogoXMock);

        // Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should render 5 <app-partner-logo> in order when 5 app-partner-logo are provided', () => {
        // Arrange
        updateGetVMSignal(landingPageVMWithFivePartnerLogoXMock);

        // Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should not render <app-testimonial-item> when 0 is provided', () => {
        // Arrange
        updateGetVMSignal(landingPageVMWithoutTestimonialMock);

        // Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should render 1 <app-testimonial-item> when 1 is provided', () => {
        // Arrange
        updateGetVMSignal(landingPageVMWithOneTestimonialMock);

        // Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should render 5 <app-testimonial-item> in order when 5 app-testimonial-item are provided', () => {
        // Arrange
        updateGetVMSignal(landingPageVMWithFiveTestimonialMock);

        // Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    it('should initialize form controls with empty values', () => {
        //Arrange
        //There is no need to arrange

        //Act
        //There is no need to act

        //Assert
        expect(component.messageForm.get('email')?.value).toBe('');
        expect(component.messageForm.get('name')?.value).toBe('');
        expect(component.messageForm.get('subject')?.value).toBe('');
        expect(component.messageForm.get('message')?.value).toBe('');
    });

    it('should validate the email format', () => {
        //Arrange
        const emailControl = component.messageForm.get('email');
        emailControl?.setValue('invalidEmail');

        //Act
        //There is no need to act

        //Assert
        expect(emailControl?.hasError('email')).toBe(true);
    });

    it('should validate the name format', () => {
        //Arrange
        const nameControl = component.messageForm.get('name');
        nameControl?.setValue('');

        //Act
        //There is no need to act

        //Assert
        expect(nameControl?.hasError('required')).toBe(true);
    });

    it('should validate the subject format', () => {
        //Arrange
        const subjectControl = component.messageForm.get('subject');
        subjectControl?.setValue('');

        //Act
        //There is no need to act

        //Assert
        expect(subjectControl?.hasError('required')).toBe(true);
    });

    it('should validate the message format', () => {
        //Arrange
        const messageControl = component.messageForm.get('message');
        messageControl?.setValue('');

        //Act
        //There is no need to act

        //Assert
        expect(messageControl?.hasError('required')).toBe(true);
    });

    it('should disable the submit button if the messageForm is invalid', () => {
        //Arrange
        updateGetVMSignal(landingPageVMMock);

        //Act
        component.messageForm.get('email')?.setValue('');
        component.messageForm.get('name')?.setValue('');
        component.messageForm.get('message')?.setValue('');
        component.messageForm.get('subject')?.setValue('');
        fixture.detectChanges();

        //Assert
        const button = fixture.nativeElement.querySelector(
            'form button[type="submit"]'
        );
        expect(button.disabled).toBe(true);
    });

    it('should enable the submit button if the messageForm is valid', () => {
        //Arrange
        updateGetVMSignal(landingPageVMMock);

        //Act
        component.messageForm.get('email')?.setValue('test@example.com');
        component.messageForm.get('name')?.setValue('name');
        component.messageForm.get('message')?.setValue('message');
        component.messageForm.get('subject')?.setValue('subject');
        fixture.detectChanges();

        //Assert
        const button = fixture.nativeElement.querySelector(
            'button[type="submit"]'
        );
        expect(button.disabled).toBe(false);
    });
});
