import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductComponent } from './product.component';
import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  template: `
    <app-product>
      <h2>Title</h2>
      <app-product-list></app-product-list>
    </app-product>
  `,
})
class TestHostComponent {}
describe('ProductComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductComponent, ProductListComponent],
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

  it('should project <h2>, <app-product-list> elements and ignore other elements', () => {
    const h2Element = compiled.querySelectorAll('h2');
    expect(h2Element.length).toBe(1);

    const productListElement = compiled.querySelectorAll('app-product-list');
    expect(productListElement.length).toBe(1);
  });
});
