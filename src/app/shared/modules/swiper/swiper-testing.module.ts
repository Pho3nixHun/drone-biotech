import { NgModule } from '@angular/core';

@NgModule()
class SwiperTestingModule {}

export const provideSwiperTestingModule = () => ({
    provide: 'SwiperModule',
    useClass: SwiperTestingModule,
});
