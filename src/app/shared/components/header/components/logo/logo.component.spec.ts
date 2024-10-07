import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoComponent } from './logo.component';
import { LogoVM } from './logo-vm.model';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;
  let compiled: HTMLElement;
  const vm: LogoVM | null = {
    imageSrc: 'assets/phoenix.jpg',
    routerLink: 'link',
    altText: 'logo',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Snapshot test
  it('should not render the template when there is no VM provided', () => {
    //Arrange

    //Act

    //Assert
    expect(compiled).toMatchSnapshot();
  });

  //Snapshot testing
  it('should get input data on the img and the anchor element', () => {
    //Arrange
    fixture.componentRef.setInput('vm', vm);

    //Act
    fixture.detectChanges();

    //Assert
    expect(compiled).toMatchSnapshot();
  });
});
