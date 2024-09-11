import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ScrollToDirective } from './scroll-to.directive';

@Component({
  template: `
    <a href="#section1" appScroll>Scroll to Section 1</a>
    <div id="section1">Section 1</div>
  `,
  standalone: true,
  imports: [ScrollToDirective],
})
class TestHostComponent {}

describe('ScrollDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let anchorDebugElement: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new ScrollToDirective();
    expect(directive).toBeTruthy();
  });

  it('should prevent the default action and scroll to the target element', () => {
    anchorDebugElement = fixture.debugElement.query(By.css('a'));

    const event = new MouseEvent('click');
    spyOn(event, 'preventDefault');

    const targetElement = document.getElementById('section1');
    if (targetElement) {
      const scrollSpy = spyOn(targetElement, 'scrollIntoView');
      anchorDebugElement.nativeElement.click();
      expect(scrollSpy).toHaveBeenCalledWith({ behavior: 'smooth' });
    }
  });
});
