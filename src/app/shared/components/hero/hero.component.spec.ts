import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { HeroVM } from './hero-vm.model';
import { Component, signal } from '@angular/core';
import { getTranslocoModule } from 'transloco-testing.module';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  template: `
    @if (vm(); as vm) {
      <app-hero [vm]="vm">
        <h1 class="testH1" id="test">{{ vm.titles[0] | transloco }}</h1>
        <p class="testP">{{ vm.titles[1] }}</p>
        <a class="testAnchor" href="">{{ vm.buttonTitles[0] | transloco }}</a>
        <button class="testButton">{{ vm.buttonTitles[1] | transloco }}</button>
        <div class="testDiv">Should not be projected</div>
      </app-hero>
    }
  `,
})
class TestHostComponent {
  vm = signal<HeroVM>({
    backgroundImageSrc: 'assets/farming.jpg',
    titles: ['LandingPage.hero.0.title', 'LandingPage.hero.1.title'],
    buttonTitles: ['LandingPage.hero.0.buttonTitle', 'LandingPage.hero.1.buttonTitle'],
  });
}
describe('HeroComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let compiled: HTMLElement;
  let translocoService: TranslocoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent, getTranslocoModule()],
      declarations: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    translocoService = TestBed.inject(TranslocoService);
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

  it('should get input data (backgroundImageSrc)', () => {
    const sectionElement: HTMLElement | null = compiled.querySelector('section');
    expect(sectionElement?.style.backgroundImage).toBe(
      `url("${component.vm()?.backgroundImageSrc}")`,
    );
  });

  it('should translate correctly', () => {
    const h1Element: HTMLElement | null = compiled.querySelector('.testH1');
    if (h1Element?.innerText)
      expect(translocoService.translate(component.vm()?.titles[0])).toBe(h1Element?.innerText);

    const pElement: HTMLElement | null = compiled.querySelector('.testP');
    if (pElement?.innerText) expect(component.vm()?.titles[1]).toBe(pElement?.innerText);
  });
});
