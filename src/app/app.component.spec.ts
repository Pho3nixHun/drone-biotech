import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { getTranslocoModule } from 'transloco-testing.module';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        getTranslocoModule({
          langs: { en: {} },
          translocoConfig: { availableLangs: ['en'], defaultLang: 'en' },
        }),
      ],
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

  it('should render the navigation titles', () => {
    const anchors = compiled.querySelectorAll('app-nav app-nav-item a');
    expect(anchors.length).toBe(4);
  });
});
