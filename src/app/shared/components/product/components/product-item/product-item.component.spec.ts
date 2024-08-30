import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductItemComponent } from './product-item.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test-host',
  template: `
    <app-product-item>
      <p id="testId" slot="id">Test ID</p>
      <img id="testImg" src="test.jpg" alt="test" />
      <h3 id="testTitle">Test Title</h3>
      <p id="testDescription" slot="description">Test Description</p>
      <div id="testDiv">Should not be projected</div>
    </app-product-item>
  `,
})
class TestHostComponent {}

describe('ProductItemComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductItemComponent, ProductItemComponent],
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

  it('should project <p>, <img>, <h3> elements and ignore other elements', () => {
    const idElement = compiled.querySelectorAll('#testId');
    expect(idElement.length).toBe(1);

    const imgElement = compiled.querySelectorAll('#testImg');
    expect(imgElement.length).toBe(1);

    const titleElement = compiled.querySelectorAll('#testTitle');
    expect(titleElement.length).toBe(1);

    const descriptionElement = compiled.querySelectorAll('#testDescription');
    expect(descriptionElement.length).toBe(1);

    const divElement = compiled.querySelectorAll('#testDiv');
    expect(divElement.length).toBe(0);
  });
});
