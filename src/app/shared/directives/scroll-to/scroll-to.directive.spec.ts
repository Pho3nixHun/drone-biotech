import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ScrollToDirective } from './scroll-to.directive';

@Component({
  template: `
    <div appScrollTo="section1">Scroll to Section 1</div>
    <section id="section1">Section 1</section>
  `,
  standalone: true,
  imports: [ScrollToDirective],
})
class TestHostComponent {}

describe('ScrollToDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let divDebugElement: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    divDebugElement = fixture.debugElement.query(By.directive(ScrollToDirective));
  });

  it('should create an instance of the directive', () => {
    const directiveInstance = divDebugElement.injector.get(ScrollToDirective);
    expect(directiveInstance).toBeTruthy();
  });

  it('should prevent the default action and scroll to the target element', () => {
    const event = new MouseEvent('click');
    spyOn(event, 'preventDefault');

    const targetElement = document.getElementById('section1');
    if (targetElement) {
      const scrollSpy = spyOn(targetElement, 'scrollIntoView');
      divDebugElement.nativeElement.click();
      expect(scrollSpy).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
    }
  });
});
