import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerLogoComponent } from './partner-logo.component';
import { PartnerLogoVM } from './partner-logo-vm.model';

describe('PartnerLogoComponent', () => {
  let component: PartnerLogoComponent;
  let fixture: ComponentFixture<PartnerLogoComponent>;
  let compiled: HTMLElement;
  const vm: PartnerLogoVM = {
    altText: 'logo',
    imageSrc: 'assets/lepke.jpg',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnerLogoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartnerLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Snapshot test
  it('should not render the template when there is not VM provided', () => {
    //Arrange

    //Act

    //Assert
    expect(compiled).toMatchSnapshot();
  });

  it('should render the template correctly when there is a VM provided', () => {
    //Arrange
    fixture.componentRef.setInput('vm', vm);

    //Act
    fixture.detectChanges();

    //Assert
    expect(compiled).toMatchSnapshot();
  });
});
