import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavItemComponent } from './nav-item.component';
import { Component, Input } from '@angular/core';
import { NavItemVM } from 'src/app/app-vm.model';

@Component({
  template: `<app-nav-item [vm]="vm">Home</app-nav-item>`,
})
class TestHostComponent {
  @Input() vm: NavItemVM | null = null;
}

describe('NavItemComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let compiled: HTMLElement;
  const mockVM: NavItemVM = { href: 'home' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent],
      imports: [NavItemComponent, NavItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Snapshot testing
  it('should not render the template when the VM is not provided', () => {
    //Arrange

    //Act

    //Assert
    expect(compiled).toMatchSnapshot();
  });

  //Snapshot testing
  it('should render the template with the provided VM and ng-content', () => {
    //Arrange
    fixture.componentRef.setInput('vm', mockVM);

    //Act
    fixture.detectChanges();

    //Assert
    expect(compiled).toMatchSnapshot();
  });
});
