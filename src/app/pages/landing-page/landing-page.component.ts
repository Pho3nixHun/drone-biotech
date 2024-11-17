import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { HeroComponent } from '@components/hero/hero.component';
import { ProductItemComponent } from '@components/product-item/product-item.component';
import { ProductListComponent } from '@components/product-list/product-list.component';
import { FrameComponent } from '@components/frame/frame.component';
import { PartnerListComponent } from '@components/partner-list/partner-list.component';
import { PartnerLogoComponent } from '@components/partner-list/components/partner-logo/partner-logo.component';
import { TestimonialItemComponent } from '@components/testimonial-item/testimonial-item.component';
import { SwiperModule } from '@modules/swiper/swiper.module';
import { TranslocoModule } from '@jsverse/transloco';
import { LandingPageService } from './landing-page.service';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Rel } from '@interfaces/with-link.interface';
import {
    FormGroup,
    FormControl,
    Validators,
    ReactiveFormsModule,
} from '@angular/forms';

/**
 * LandingPageComponent
 *
 * Type: Container
 *
 * Scope:
 * - Responsible for rendering a hero section.
 * - Conditionally renders a product section with a list of products or a partner section with a list of partners and a testimonial carousel.
 * - Passes relevant data.
 *
 * Out-of-Scope:
 * - Does not handle the internal logic or styling of the `app-hero` and different frame components.
 * - Not responsible for the detailed presentation logic.
 *
 * Purpose (optional):
 * - To serve as a smart container component that integrates business logic, including data fetching and presentation, to create a cohesive user interface.
 */

@Component({
    selector: 'app-landing-page',
    standalone: true,
    imports: [
        HeroComponent,
        ProductItemComponent,
        ProductListComponent,
        RouterLink,
        FrameComponent,
        PartnerListComponent,
        PartnerLogoComponent,
        TestimonialItemComponent,
        SwiperModule,
        TranslocoModule,
        NgTemplateOutlet,
        ReactiveFormsModule,
        NgClass,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './landing-page.component.html',
})
export class LandingPageComponent {
    protected readonly defaultRel: Rel[] = [Rel.NoOpener, Rel.NoReferrer];
    protected readonly defaultTarget = '_self';

    private readonly landingPageService = inject(LandingPageService);
    protected vm = this.landingPageService.getVM();

    public messageForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        subject: new FormControl('', [Validators.required]),
        message: new FormControl('', [Validators.required]),
    });

    get name() {
        return this.messageForm.get('name');
    }
    get email() {
        return this.messageForm.get('email');
    }
    get subject() {
        return this.messageForm.get('subject');
    }
    get message() {
        return this.messageForm.get('message');
    }

    protected sendMessage() {
        this.messageForm.reset();
    }
}
