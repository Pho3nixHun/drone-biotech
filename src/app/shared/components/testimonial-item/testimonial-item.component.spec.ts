import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialItemComponent } from './testimonial-item.component';
import { TestimonialItemVM } from './testimonial-item-vm';

describe('TestimonialItemComponent', () => {
  let component: TestimonialItemComponent;
  let fixture: ComponentFixture<TestimonialItemComponent>;
  let compiled: HTMLElement;
  const vm: TestimonialItemVM = {
    message: 'A truly outstanding experience, 5 stars!',
    name: 'Emily Johnson',
    location: 'Product Manager, Some Company',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestimonialItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the input data and visualize it', () => {
    fixture.componentRef.setInput('vm', vm);
    fixture.detectChanges();

    expect(compiled.innerText).toContain(vm.message);
    expect(compiled.innerText).toContain(vm.name);
    expect(compiled.innerText).toContain(vm.location);
  });
});
