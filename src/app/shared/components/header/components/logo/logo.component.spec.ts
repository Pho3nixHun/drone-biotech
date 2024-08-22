import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoComponent } from './logo.component';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get input data on the img and the anchor element', () => {
    fixture.componentRef.setInput('vm', { imageSrc: 'assets/phoenix.jpg', routerLink: 'link' });
    fixture.detectChanges();
    const imgElement: HTMLImageElement = compiled.querySelector('img')!;
    const anchorElement: HTMLAnchorElement = compiled.querySelector('a')!;
    expect(imgElement.getAttribute('src')).toBe('assets/phoenix.jpg'); 
    expect(anchorElement.getAttribute('href')).toBe('link');
  });
});
