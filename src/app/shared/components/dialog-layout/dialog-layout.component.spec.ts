import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogLayoutComponent } from './dialog-layout.component';
import { Component, input } from '@angular/core';
import { DialogLayoutVM } from './dialog-layout.model';
import { getTranslocoModule } from 'transloco-testing.module';
import { By } from '@angular/platform-browser';

const en = { title: 'value' };

@Component({
    imports: [DialogLayoutComponent],
    template: `
        <app-dialog-layout [vm]="vm()">
            <button>Should be projected</button>
            <div>Should be projected</div>
        </app-dialog-layout>
    `,
})
class TestHostComponent {
    public vm = input.required<DialogLayoutVM>();
}
describe('DialogLayoutComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let compiled: HTMLElement;
    const vm: DialogLayoutVM = {
        titleKey: en.title,
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                TestHostComponent,
                getTranslocoModule({
                    langs: { en: en },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
        }).compileComponents();
        fixture = TestBed.createComponent(TestHostComponent);
        compiled = fixture.debugElement.nativeElement;
    });

    //Snapshot test
    it('should render the template when the VM is provided, translate and project the content correctly', () => {
        //Arrange
        fixture.componentRef.setInput('vm', vm);

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });

    //Interaction test
    it('should call the emitter after clicking on the close button', () => {
        //Arrange
        fixture.componentRef.setInput('vm', vm);

        const baseDialogEmitterRef = fixture.debugElement.query(
            By.directive(DialogLayoutComponent)
        ).componentInstance.close;

        jest.spyOn(baseDialogEmitterRef, 'emit');

        //Act
        fixture.detectChanges();
        const closeButton = fixture.debugElement.query(By.css('button'));
        closeButton.triggerEventHandler('click');

        //Assert
        expect(baseDialogEmitterRef.emit).toHaveBeenCalled();
    });
});
