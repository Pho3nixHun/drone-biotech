import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { NavComponent } from '@components/nav/nav.component';
import { Component } from '@angular/core';
import { LogoComponent } from '@components/logo/logo.component';

@Component({
  template: `
    <app-header>
      <app-logo>app-logo element 1</app-logo>
      <app-logo>app-logo element 2</app-logo>
      <app-nav>app-nav element 1</app-nav>
      <app-nav>app-nav element 2</app-nav>
      <div>This should not be projected</div>
    </app-header>
  `,
})
class TestHostComponent {}
describe('HeaderComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, LogoComponent, NavComponent],
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

  it('should project <app-logo>, <app-nav> elements and ignore other elements', () => {
    const divElement: HTMLElement = compiled.querySelector('div')!;

    const appLogoElements = divElement.querySelectorAll('app-logo');
    expect(appLogoElements.length).toBe(2);

    const appNavElements = divElement.querySelectorAll('app-nav');
    expect(appNavElements.length).toBe(2);

    const divElements = divElement.querySelectorAll('div');
    expect(divElements.length).toBe(0);
  });
});
