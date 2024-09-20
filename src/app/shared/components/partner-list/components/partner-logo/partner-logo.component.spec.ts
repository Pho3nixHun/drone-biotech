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

  it('should get the input and visualize it', () => {
    fixture.componentRef.setInput('vm', vm);
    fixture.detectChanges();

    const imgElement: HTMLElement | null = compiled.querySelector('img');
    expect(imgElement?.getAttribute('src')).toBe(vm.imageSrc);
    expect(imgElement?.getAttribute('alt')).toBe(vm.altText);
  });
});
