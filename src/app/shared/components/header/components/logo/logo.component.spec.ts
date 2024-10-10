import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoComponent } from './logo.component';
import { LogoVM } from './logo-vm.model';

describe('LogoComponent', () => {
  let fixture: ComponentFixture<LogoComponent>;
  let compiled: HTMLElement;
  const vm: LogoVM = {
    imageSrc: 'assets/phoenix.jpg',
    routerLink: 'link',
    altText: 'logo',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LogoComponent);
    compiled = fixture.debugElement.nativeElement;
  });

  //Snapshot testing
  it('should render the template when the VM is provided', () => {
    //Arrange
    fixture.componentRef.setInput('vm', vm);

    //Act
    fixture.detectChanges();

    //Assert
    expect(compiled).toMatchSnapshot();
  });
});
