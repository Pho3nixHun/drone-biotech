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
      <div>Should not be projected</div>
      <div>Should not be projected</div>
    </app-nav>
  `,
})
class TestHostComponent {
  vm: NavItemVM = {
    href: 'link',
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
  it('should project <app-nav-item> elements and ignore other elements', () => {
    //Arrange
    //No need to arrange

    //Act
    //No need to act

    //Assert
    expect(compiled).toMatchSnapshot();
  });
});
