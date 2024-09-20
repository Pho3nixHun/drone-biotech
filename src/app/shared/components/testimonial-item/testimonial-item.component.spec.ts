import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestimonialItemComponent } from './testimonial-item.component';
import { TestimonialItemVM } from './testimonial-item-vm.model';
import { getTranslocoModule } from 'transloco-testing.module';

describe('TestimonialItemComponent', () => {
  let component: TestimonialItemComponent;
  let fixture: ComponentFixture<TestimonialItemComponent>;
  let compiled: HTMLElement;
  const vm: TestimonialItemVM = {
    messageKey: 'A truly outstanding experience, 5 stars!',
    name: 'Emily Johnson',
    roleAndCompanyKey: 'Product Manager, Some Company',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialItemComponent, getTranslocoModule()],
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

    expect(compiled.innerText).toContain(vm.messageKey);
    expect(compiled.innerText).toContain(vm.name);
    expect(compiled.innerText).toContain(vm.roleAndCompanyKey);
  });
});
