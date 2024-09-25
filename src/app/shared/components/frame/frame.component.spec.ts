import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrameComponent } from './frame.component';
import { FrameVM } from './frame-vm';
import { getTranslocoModule } from 'transloco-testing.module';

const en = { title: 'Our Products' };

describe('FrameComponent', () => {
  let component: FrameComponent;
  let fixture: ComponentFixture<FrameComponent>;
  let compiled: HTMLElement;
  const vm: FrameVM = { titleKey: en.title };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FrameComponent,
        getTranslocoModule({
          langs: { en },
          translocoConfig: { availableLangs: ['en'], defaultLang: 'en' },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the input data and visualize that', () => {
    fixture.componentRef.setInput('vm', vm);
    fixture.detectChanges();

    const h2Element: HTMLElement | null = compiled.querySelector('h2');
    expect(h2Element?.innerText).toBe(en.title);
  });
});
