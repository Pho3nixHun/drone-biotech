import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrameComponent } from './frame.component';
import { Component } from '@angular/core';

@Component({
  template: `
    <app-frame>
      <div>{{ text }}</div>
    </app-frame>
  `,
})
class TestHostComponent {
  text = 'Should be projected';
}

describe('FrameComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrameComponent],
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

  it('should contain the projected <div> element', () => {
    console.log(compiled);
    const divElement: HTMLElement | null = compiled.querySelector('app-frame section div');
    expect(divElement?.innerText).toBe(component.text);
  });
});
