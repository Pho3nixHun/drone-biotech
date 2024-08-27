import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroComponent } from './hero.component';
import { HeroComponentVM } from './hero.component.vm';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;
  let compiled: HTMLElement;
  const vm: HeroComponentVM = {
    backgroundImageSrc: 'assets/farming.jpg',
    title: 'The future of irrigation is now',
    description: 'IRRIOT is a completely wireless precision irrigation automation system',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get input data and display', () => {
    fixture.componentRef.setInput('vm', vm);
    fixture.detectChanges();

    expect(compiled.innerText).toContain(vm.title);
    expect(compiled.innerText).toContain(vm.description);

    const sectionElement: HTMLElement = compiled.querySelector('section')!;
    expect(sectionElement.style.backgroundImage).toBe(`url("${vm.backgroundImageSrc}")`);
  });
});
