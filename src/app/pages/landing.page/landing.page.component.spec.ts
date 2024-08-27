import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponent } from './landing.page.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the <app-hero>', () => {
    expect(compiled.querySelector('app-hero')).toBeTruthy();
  });

  it('should render the correct navigation titles', () => {
    const anchors = compiled.querySelectorAll('a');
    expect(anchors.length).toBe(2);
    expect(anchors[0].textContent).toContain('Contact Us');
    expect(anchors[1].textContent).toContain('Learn More');
  });
});
