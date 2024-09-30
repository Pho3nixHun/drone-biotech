import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { NavComponent } from './nav.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';

@Component({
  template: `
    <app-nav>
      <app-nav-item></app-nav-item>
      <app-nav-item></app-nav-item>
      <div></div>
      <div></div>
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

  it('should project elements inside', () => {
    const navItemElements = compiled.querySelectorAll('app-nav-item');
    expect(navItemElements.length).toBe(2);
    const divElements = compiled.querySelectorAll('div');
    expect(divElements.length).toBe(2);
  });
});
