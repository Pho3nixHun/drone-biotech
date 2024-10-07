import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { Component } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  template: `
    <app-product-list>
      <app-product-item></app-product-item>
      <app-product-item></app-product-item>
      <div>This should not been projected</div>
    </app-product-list>
  `,
})
class TestHostComponent {}
describe('ProductListComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListComponent, ProductItemComponent],
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
  it('should render the <app-product-item> elements and ignore other elements', () => {
    //Arrange
    const productItems = compiled.querySelectorAll('app-product-list app-product-item');
    const divItems = compiled.querySelectorAll('app-product-list div div');

    //Act

    //Assert
    expect(productItems.length).toBe(2);
    expect(divItems.length).toBe(0);
  });
});
