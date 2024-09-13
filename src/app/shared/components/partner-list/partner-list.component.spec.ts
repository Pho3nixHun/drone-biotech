import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerListComponent } from './partner-list.component';
import { Component } from '@angular/core';
import { PartnerLogoComponent } from './components/partner-logo/partner-logo.component';

@Component({
  template: `
    <app-partner-list>
      <app-partner-logo></app-partner-logo>
      <app-partner-logo></app-partner-logo>
      <app-partner-list></app-partner-list>
    </app-partner-list>
  `,
})
class TestHostComponent {}

describe('PartnerListComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnerListComponent, PartnerLogoComponent],
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

  it('should project the <app-partner-logo> and ignore other elements', () => {
    const logoItems = compiled.querySelectorAll('app-partner-list app-partner-logo');
    expect(logoItems.length).toBe(2);

    const partnerList = compiled.querySelectorAll('app-partner-list app-partner-list');
    expect(partnerList.length).toBe(0);
  });
});
