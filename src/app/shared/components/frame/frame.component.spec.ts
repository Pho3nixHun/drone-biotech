import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrameComponent } from './frame.component';
import { getTranslocoModule } from 'transloco-testing.module';
import { Component, Input } from '@angular/core';
import { FrameVM } from './frame-vm';

const en = { title: 'Our Products' };

@Component({
  template: `<app-frame [vm]="vm"><div>Should be projected</div></app-frame>`,
})
class TestHostComponent {
  @Input() vm!: FrameVM;
}
describe('FrameComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let compiled: HTMLElement;
  const vm: FrameVM = {
    titleKey: en.title,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FrameComponent,
        getTranslocoModule({
          langs: { en: en },
          translocoConfig: { availableLangs: ['en'], defaultLang: 'en' },
        }),
      ],
      declarations: [TestHostComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TestHostComponent);
    compiled = fixture.debugElement.nativeElement;
  });

  //Snapshot test
  it('should render the template when the VM is provided', () => {
    //Arrange
    fixture.componentRef.setInput('vm', vm);

    //Act
    fixture.detectChanges();

    //Assert
    expect(compiled).toMatchSnapshot();
  });
});
