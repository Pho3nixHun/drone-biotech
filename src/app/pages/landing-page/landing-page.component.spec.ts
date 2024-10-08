import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingPageComponent } from './landing-page.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingPageComponent, RouterTestingModule],
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
    const anchors = compiled.querySelectorAll('app-hero a');
    expect(anchors.length).toBe(2);
    expect(anchors[0].textContent).toContain('Contact Us');
    expect(anchors[1].textContent).toContain('Learn More');
  });

  it('should render the correct navigation titles', () => {
    const anchors = compiled.querySelectorAll('app-hero a');
    expect(anchors.length).toBe(2);
    expect(anchors[0].textContent).toContain('Contact Us');
    expect(anchors[1].textContent).toContain('Learn More');
  });

  it('should render the <app-product-item> elements inside the <app-product-list> inside the <app-frame>', () => {
    const products = compiled.querySelectorAll('app-frame app-product-list app-product-item');
    expect(products.length).toBe(3);
  });

  it('should render the <app-partner-list> inside the <app-frame>', () => {
    const partnerList = compiled.querySelector('app-frame app-partner-list');
    expect(partnerList).toBeTruthy();
  });
});
