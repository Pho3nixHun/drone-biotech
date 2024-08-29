import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { HeroComponentVM } from './hero.component.vm';
import { Component, signal } from '@angular/core';

@Component({
  template: `
    <app-hero [vm]="vm()">
      <h1 class="testH1" id="test">The future of irrigation is now</h1>
      <p class="testP">IRRIOT is a completely wireless precision irrigation automation system</p>
      <a class="testAnchor" href="">Contact Us</a>
      <button class="testButton">Test button</button>
      <div class="testDiv">Should not be projected</div>
    </app-hero>
  `,
})
class TestHostComponent {
  vm = signal<HeroComponentVM | null>({
    backgroundImageSrc: 'assets/farming.jpg',
  });
}
describe('HeroComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent],
      declarations: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render projected contents like the <h1>, <p> and <a> elements and ignore other elements', () => {
    const h1Element = compiled.querySelectorAll('.testH1');
    expect(h1Element.length).toBe(1);

    const pElement = compiled.querySelectorAll('.testP');
    expect(pElement.length).toBe(1);

    const anchorElement = compiled.querySelectorAll('.testAnchor');
    expect(anchorElement.length).toBe(1);

    const buttonElement = compiled.querySelectorAll('.testButton');
    expect(buttonElement.length).toBe(1);

    const divElement = compiled.querySelectorAll('.testDiv');
    expect(divElement.length).toBe(0);
  });

  it('should get input data (backgroundImageSrc)', () => {
    const sectionElement: HTMLElement | null = compiled.querySelector('section');
    expect(sectionElement?.style.backgroundImage).toBe(
      `url("${component.vm()?.backgroundImageSrc}")`,
    );
  });
});
