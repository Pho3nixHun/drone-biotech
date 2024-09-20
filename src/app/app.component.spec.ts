import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { getTranslocoModule } from 'transloco-testing.module';
import { TranslocoService } from '@jsverse/transloco';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;
  let translocoService: TranslocoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, getTranslocoModule()],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    translocoService = TestBed.inject(TranslocoService);
    translocoService.setActiveLang('en');
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
    const anchors = compiled.querySelectorAll('app-nav app-nav-item a');
    expect(anchors.length).toBe(4);

    expect(anchors[0].textContent).toContain('Home');
    expect(anchors[1].textContent).toContain('Products');
    expect(anchors[2].textContent).toContain('Partners');
    expect(anchors[3].textContent).toContain('Contacts');
  });
});
