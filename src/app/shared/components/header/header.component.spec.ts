import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { NavComponent } from '@components/header/components/nav/nav.component';
import { Component } from '@angular/core';
import { LogoComponent } from '@components/header/components/logo/logo.component';

@Component({
  template: `
    <app-header>
      <app-logo id="testlogo">app-logo element 1</app-logo>
      <app-logo id="testlogo">app-logo element 2</app-logo>
      <app-nav id="testnav">app-nav element 1</app-nav>
      <app-nav id="testnav">app-nav element 2</app-nav>
      <div id="testdiv">This should not be projected</div>
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

    const appLogoElements = compiled.querySelectorAll('#testlogo');
    expect(appLogoElements.length).toBe(2);

    const appNavElements = compiled.querySelectorAll('#testnav');
    expect(appNavElements.length).toBe(2);

    const divElements = compiled.querySelectorAll('#testdiv');
    expect(divElements.length).toBe(0);
  });
});
