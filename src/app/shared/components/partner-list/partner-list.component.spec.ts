import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerListComponent } from './partner-list.component';
import { Component } from '@angular/core';
import { PartnerLogoComponent } from './components/partner-logo/partner-logo.component';

@Component({
  template: `
    <app-partner-list>
      <app-partner-logo></app-partner-logo>
      <app-partner-logo></app-partner-logo>
      <app-partner-list>Should not be projected</app-partner-list>
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

  //Snapshot test
  it('should project the <app-partner-logo> and ignore other elements', () => {
    //Arrange
    const logoItems = compiled.querySelectorAll('app-partner-list app-partner-logo');
    const partnerList = compiled.querySelectorAll('app-partner-list app-partner-list');

    //Act

    //Assert
    expect(logoItems.length).toBe(2);
    expect(partnerList.length).toBe(0);
  });
});
