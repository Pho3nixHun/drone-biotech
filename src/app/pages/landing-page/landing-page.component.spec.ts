import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingPageComponent } from './landing-page.component';
import { getTranslocoModule } from 'transloco-testing.module';
import {
    enMock,
    mockVM,
    mockVMWithButtonTextsInHero,
    mockVMWithFiveFrames,
    mockVMWithFiveMixedPartnerLogoXVM,
    mockVMWithFivePartnerLogoXVM,
    mockVMWithFiveProductItem,
    mockVMWithFiveTestimonial,
    mockVMWithHero,
    mockVMWithOneFrame,
    mockVMWithOnePartnerLogoXVM,
    mockVMWithOneProductItem,
    mockVMWithOneTestimonial,
    mockVMWithoutButtonTextsInHero,
    mockVMWithoutFrames,
    mockVMWithoutHero,
    mockVMWithoutPartnerLogoXVM,
    mockVMWithoutProductItem,
    mockVMWithoutTestimonial,
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

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                LandingPageComponent,
                getTranslocoModule({
                    langs: { en: enMock },
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
        fixture = TestBed.createComponent(LandingPageComponent);
        compiled = fixture.debugElement.nativeElement;
        updateGetVMSignal(undefined);
    });

    //Snapshot test
    it('should not render anything if the VM is not provided', () => {
        // There is no need to arrange

        // There is no need to act

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should render the template when there is a VM provided', () => {
        // Arrange
        updateGetVMSignal(mockVM);
        // Act
        fixture.detectChanges();
        // Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should not render the hero section when the heroXVM is not provided', () => {
        // Arrange
        updateGetVMSignal(mockVMWithoutHero);
        // Act
        fixture.detectChanges();
        // Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should render the hero section when the heroXVM is provided', () => {
        // Arrange
        updateGetVMSignal(mockVMWithHero);
        // Act
        fixture.detectChanges();
        // Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should render the texts of the buttons inside the hero if provided', () => {
        // Arrange
        updateGetVMSignal(mockVMWithButtonTextsInHero);
        // Act
        fixture.detectChanges();
        // Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should not render the texts of the buttons inside the hero if provided', () => {
        // Arrange
        updateGetVMSignal(mockVMWithoutButtonTextsInHero);
        // Act
        fixture.detectChanges();
        // Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should not render frames when 0 frame is provided', () => {
        // Arrange
        updateGetVMSignal(mockVMWithoutFrames);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should render 1 frame when 1 frame is provided', () => {
        // Arrange
        updateGetVMSignal(mockVMWithOneFrame);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should render 5 frames in order when 5 frames are provided', () => {
        // Arrange
        updateGetVMSignal(mockVMWithFiveFrames);

        // Act
        fixture.detectChanges();

        // Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should not render <app-product-item> when 0 is provided', () => {
        // Arrange
        updateGetVMSignal(mockVMWithoutProductItem);

        // Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should render 1 <app-product-item> when 1 is provided', () => {
        // Arrange
        updateGetVMSignal(mockVMWithOneProductItem);

        // Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should render 5 <app-product-item> in order when 5 <app-product-item>  are provided', () => {
        // Arrange
        updateGetVMSignal(mockVMWithFiveProductItem);

        // Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should not render <app-partner-logo> when 0 is provided', () => {
        // Arrange
        updateGetVMSignal(mockVMWithoutPartnerLogoXVM);

        // Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should render 1 <app-partner-logo> when 1 is provided', () => {
        // Arrange
        updateGetVMSignal(mockVMWithOnePartnerLogoXVM);

        // Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should render 5 <app-partner-logo> in order when 5 app-partner-logo are provided', () => {
        // Arrange
        updateGetVMSignal(mockVMWithFivePartnerLogoXVM);

        // Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should render 5 mixed <app-partner-logo> in order when 5 app-partner-logo are provided', () => {
        // Arrange
        updateGetVMSignal(mockVMWithFiveMixedPartnerLogoXVM);

        // Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should not render <app-testimonial-item> when 0 is provided', () => {
        // Arrange
        updateGetVMSignal(mockVMWithoutTestimonial);

        // Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should render 1 <app-testimonial-item> when 1 is provided', () => {
        // Arrange
        updateGetVMSignal(mockVMWithOneTestimonial);

        // Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Snapshot test
    it('should render 5 <app-testimonial-item> in order when 5 app-testimonial-item are provided', () => {
        // Arrange
        updateGetVMSignal(mockVMWithFiveTestimonial);

        // Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });
});
