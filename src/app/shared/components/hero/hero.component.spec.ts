import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { Component, signal } from '@angular/core';
import { getTranslocoModule } from 'transloco-testing.module';
import { ExtendedHeroVMWithTitles } from 'src/app/pages/landing-page/landing-page-vm.model';

const en = { title1: 'Hello', title2: 'World', buttonTitle1: '123', buttonTitle2: '234' };
@Component({
  template: `
    @if (vm(); as vm) {
      <app-hero [vm]="vm">
        <h1 class="testH1" id="test">{{ vm.titles[0] | transloco }}</h1>
        <p class="testP">{{ vm.titles[1] | transloco }}</p>
        <a class="testAnchor" href="">{{ vm.buttonTitles[0] | transloco }}</a>
        <button class="testButton">{{ vm.buttonTitles[1] | transloco }}</button>
        <div class="testDiv">Should not be projected</div>
      </app-hero>
    }
  `,
})
class TestHostComponent {
  vm = signal<ExtendedHeroVMWithTitles>({
    backgroundImageSrc: 'assets/farming.jpg',
    titles: [en.title1, en.title2],
    buttonTitles: [en.buttonTitle1, en.buttonTitle2],
  });
}

describe('HeroComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HeroComponent,
        getTranslocoModule({
          langs: { en },
          translocoConfig: { availableLangs: ['en'], defaultLang: 'en' },
        }),
      ],
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

  it('should get input data (backgroundImageSrc)', () => {
    const sectionElement: HTMLElement | null = compiled.querySelector('section');
    expect(sectionElement?.style.backgroundImage).toBe(
      `url("${component.vm()?.backgroundImageSrc}")`,
    );
  });

  it('should translate correctly', () => {
    const h1Element: HTMLElement | null = compiled.querySelector('.testH1');
    expect(h1Element?.innerHTML).toBe(en.title1);

    const pElement: HTMLElement | null = compiled.querySelector('.testP');
    expect(pElement?.innerHTML).toBe(en.title2);

    const anchorElement: HTMLElement | null = compiled.querySelector('.testAnchor');
    expect(anchorElement?.innerHTML).toBe(en.buttonTitle1);

    const buttonElement: HTMLElement | null = compiled.querySelector('.testButton');
    expect(buttonElement?.innerHTML).toBe(en.buttonTitle2);
  });
});
