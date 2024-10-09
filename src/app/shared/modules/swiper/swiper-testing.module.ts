import { NgModule, InjectionToken, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element-bundle';

// Create an injection token for the register function
export const SWIPER_REGISTER = new InjectionToken<() => void>('SwiperRegister');

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    // Provide the real or mocked register function via the token
    { provide: SWIPER_REGISTER, useValue: register },
  ],
})
export class SwiperTestingModule {
  constructor(@Inject(SWIPER_REGISTER) private readonly swiperRegister: () => void) {
    this.swiperRegister();
  }
}
