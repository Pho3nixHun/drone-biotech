import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavItemComponent } from './nav-item.component';
import { getTranslocoModule } from 'transloco-testing.module';
import { NavItemVM } from './nav-item-vm.model';

describe('NavItemComponent', () => {
  let component: NavItemComponent;
  let fixture: ComponentFixture<NavItemComponent>;
  let compiled: HTMLElement;
  const vm: NavItemVM = { titleKey: 'Home' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavItemComponent, getTranslocoModule()],
    }).compileComponents();

    fixture = TestBed.createComponent(NavItemComponent);
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
    expect(compiled.innerText).toContain(vm.titleKey);
  });
});
