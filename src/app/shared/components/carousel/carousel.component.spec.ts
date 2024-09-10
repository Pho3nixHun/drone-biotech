import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselComponent } from './carousel.component';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  template: `
    <app-carousel>
      <swiper-slide></swiper-slide>
      <swiper-slide></swiper-slide>
    </app-carousel>
  `,
})
class TestHostComponent {}
describe('CarouselComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselComponent],
      declarations: [TestHostComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should project the content inside', () => {
    const slides = compiled.querySelectorAll('app-carousel swiper-slide');
    expect(slides.length).toBe(2);
  });
});
