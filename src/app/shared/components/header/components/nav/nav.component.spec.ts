import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { NavComponent } from './nav.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { NavItemVM } from './components/nav-item/nav-item-vm';

@Component({
  template: `
    <app-nav>
      <app-nav-item [vm]="vm" />
      <app-nav-item [vm]="vm" />
      <button>Button</button>
      <div>Should not be projected</div>
      <div>Should not be projected</div>
    </app-nav>
  `,
})
class TestHostComponent {
  vm: NavItemVM = {
    routerLink: '/test',
  };
}

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

  //Snapshot testing
  it('should project <app-nav-item>, <button> elements and ignore other elements', () => {
    //Arrange
    fixture.componentRef.setInput('vm', {});

    //Act
    fixture.detectChanges();

    //Assert
    expect(compiled).toMatchSnapshot();
  });
  it('should assign routerLink if provided in VM', () => {
    //Arrange
    fixture.componentRef.setInput('vm', {
      routerLink: '/test',
    });

    //Act
    fixture.detectChanges();

    //Assert
    expect(compiled).toMatchSnapshot();
  });
  it('should assign href with default target and relation if only href is provided in VM', () => {
    //Arrange
    fixture.componentRef.setInput('vm', {
      href: 'http://test.com',
    });

    //Act
    fixture.detectChanges();

    //Assert
    expect(compiled).toMatchSnapshot();
  });
  it('should assign href with target and relation if provided in VM', () => {
    //Arrange
    fixture.componentRef.setInput('vm', {
      href: 'http://test.com',
      target: '_blank',
      rel: 'noopener',
    });

    //Act
    fixture.detectChanges();

    //Assert
    expect(compiled).toMatchSnapshot();
  });
});
