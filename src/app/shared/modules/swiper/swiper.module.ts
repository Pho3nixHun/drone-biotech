import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element-bundle';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class SwiperModule {
  constructor() {
    register();
  }
}
