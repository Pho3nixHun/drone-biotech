import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { NavComponent } from './nav.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';

@Component({
  template: `
    <app-nav>
      <app-nav-item class="testnavitem"></app-nav-item>
      <app-nav-item class="testnavitem"></app-nav-item>
      <div class="testdivitem">This should not be projected</div>
    </app-nav>
  `,
})
class TestHostComponent {}

describe('NavComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent],
      imports: [NavComponent, NavItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should only project <a> elements and ignore other elements', () => {
    const navItemElements = compiled.querySelectorAll('.testnavitem');
    expect(navItemElements.length).toBe(2);
    const divElements = compiled.querySelectorAll('.testdivitem');
    expect(divElements.length).toBe(0);
  });
});
