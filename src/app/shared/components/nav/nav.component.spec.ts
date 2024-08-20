import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { NavComponent } from './nav.component';

@Component({
  template: `
    <app-nav>
      <a>Anchor element 1</a>
      <a>Anchor element 2</a>
      <div>This should not be projected</div>
    </app-nav>
  `,
})
class TestHostComponent {}

describe('NavComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent],
      imports: [NavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should only project <a> elements and ignore other elements', () => {
    const navElement: HTMLElement = fixture.nativeElement.querySelector('nav');
    const anchorElements = navElement.querySelectorAll('a');
    expect(anchorElements.length).toBe(2);
    const divElements = navElement.querySelectorAll('div');
    expect(divElements.length).toBe(0);
  });
});
