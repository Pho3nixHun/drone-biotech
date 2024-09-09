import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrameComponent } from './frame.component';
import { FrameVM } from './frame-vm';

describe('FrameComponent', () => {
  let component: FrameComponent;
  let fixture: ComponentFixture<FrameComponent>;
  let compiled: HTMLElement;
  const vm: FrameVM = { title: 'Our Products' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrameComponent],
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
    expect(h2Element?.innerText).toBe(vm.title);
  });
});
