import { NgModule } from '@angular/core';
import { register } from 'swiper/element-bundle';

@NgModule()
export class SwiperModule {
  constructor() {
    register();
  }
}
