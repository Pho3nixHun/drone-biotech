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
  let component: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent],
      imports: [NavComponent, NavItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Snapshot testing
  it('should project <app-nav-item> elements and ignore other elements', () => {
    //Arrange
    const navItemElements = compiled.querySelectorAll('app-nav-item');
    const divElements = compiled.querySelectorAll('div');

    //Act

    //Assert
    expect(navItemElements.length).toBe(2);
    expect(divElements.length).toBe(0);
  });
});
