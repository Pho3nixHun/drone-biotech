import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { getTranslocoModule } from 'transloco-testing.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { signal, WritableSignal } from '@angular/core';
import { AppService } from './app.service';
import { AppComponentVM } from './app-vm.model';
import {
  appMockVMWithFiveNavItem,
  appMockVMWithOneNavItem,
  appMockVMWithoutNavItem,
} from './app.mock';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let compiled: HTMLElement;
  let vmSignal: WritableSignal<AppComponentVM | undefined>;

  beforeEach(async () => {
    const appServiceMock = {
      getVM: jest.fn(),
    };
    vmSignal = signal(undefined);
    appServiceMock.getVM.mockReturnValue(vmSignal);

    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        getTranslocoModule({
          langs: { en: {} },
          translocoConfig: { availableLangs: ['en'], defaultLang: 'en' },
        }),
        RouterModule.forRoot(routes),
      ],
      providers: [
        {
          provide: AppService,
          useValue: appServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'drone-biotech-webapp' title`, () => {
    expect(component.title).toEqual('drone-biotech-webapp');
  });

  it(`should not render the template when the VM is not provided`, () => {
    //Arrange

    //Act

    //Assert
    expect(compiled).toMatchSnapshot();
  });

  it(`should not render <app-nav-item> when there is no item provided`, () => {
    //Arrange
    vmSignal.set(appMockVMWithoutNavItem);

    //Act
    fixture.detectChanges();

    //Assert
    expect(compiled).toMatchSnapshot();
  });

  it(`should render 1 <app-nav-item> when 1 item is provided`, () => {
    //Arrange
    vmSignal.set(appMockVMWithOneNavItem);

    //Act
    fixture.detectChanges();
    const navItems = compiled.querySelectorAll('app-nav-item');

    //Assert
    expect(navItems.length).toBe(1);
  });

  it(`should render 5 <app-nav-item> in order when 5 items are provided`, () => {
    //Arrange
    vmSignal.set(appMockVMWithFiveNavItem);

    //Act
    fixture.detectChanges();
    const navItems = compiled.querySelectorAll('app-nav-item');

    //Assert
    expect(navItems.length).toBe(5);
  });
});
