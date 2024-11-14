import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';
import { Component, Input } from '@angular/core';
import { LoginFormVM } from './login-form-vm.model';

@Component({
  template: `<app-login-form [vm]="vm">
    <div>Should not projected</div>
    <p>Should be projected</p>
    <h3>Should be projected</h3>
    <form>Should be projected</form>
  </app-login-form>`,
})
class TestHostComponent {
  @Input() vm!: LoginFormVM;
}

describe('LoginFormComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let compiled: HTMLElement;
  const vm: LoginFormVM = {
    backgroundImageSrc: 'assets/phoenix.jpg',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginFormComponent],
      declarations: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    compiled = fixture.debugElement.nativeElement;
  });

  //Snapshot testing
  it('should project the contents, render the template correctly when there is a VM provided', () => {
    //Arrange
    fixture.componentRef.setInput('vm', vm);
    //Act
    fixture.detectChanges();
    //Assert
    expect(compiled).toMatchSnapshot();
  });
});
