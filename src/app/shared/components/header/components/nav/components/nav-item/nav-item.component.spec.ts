import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavItemComponent } from './nav-item.component';
import { Component } from '@angular/core';

@Component({
  template: `<app-nav-item>Home</app-nav-item>`,
})
class TestHostComponent {}

describe('NavItemComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent],
      imports: [NavItemComponent, NavItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it("should project the 'Home' title inside the <app-nav-item>", () => {
    const navItemElement = compiled.querySelector('app-nav-item');
    expect(navItemElement?.textContent?.trim()).toBe('Home');
  });
});
