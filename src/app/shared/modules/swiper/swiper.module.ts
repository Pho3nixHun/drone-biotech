import { NgModule } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { register } from 'swiper/element-bundle';

@NgModule()
export class SwiperModule {
  constructor() {
    register();
  }
}
