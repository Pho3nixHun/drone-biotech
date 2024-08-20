import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'drone-biotech-webapp' title`, () => {
    expect(component.title).toEqual('drone-biotech-webapp');
  });

  it('should render app-header, app-logo, and app-nav components', () => {
    expect(compiled.querySelector('app-header')).toBeTruthy();
    expect(compiled.querySelector('app-logo')).toBeTruthy();
    expect(compiled.querySelector('app-nav')).toBeTruthy();
  });

  it('should render the correct navigation titles', () => {
    const anchors = compiled.querySelectorAll('app-nav a');
    expect(anchors.length).toBe(4);
    expect(anchors[0].textContent).toContain('Home');
    expect(anchors[1].textContent).toContain('Products');
    expect(anchors[2].textContent).toContain('Partners');
    expect(anchors[3].textContent).toContain('Contacts');
  });
});
