import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDialogComponent } from './base-dialog.component';
import { Component, input } from '@angular/core';
import { BaseDialogVM } from './base-dialog.model';
import { getTranslocoModule } from 'transloco-testing.module';
import { By } from '@angular/platform-browser';

const en = { title: 'value' };

@Component({
    template: `
        <app-base-dialog [vm]="vm()">
            <button>Should be projected</button>
            <div>Should be projected</div>
        </app-base-dialog>
    `,
})
class TestHostComponent {
    public vm = input.required<BaseDialogVM>();
}
describe('BaseDialogComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let compiled: HTMLElement;
    const vm: BaseDialogVM = {
        titleKey: en.title,
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                BaseDialogComponent,
                getTranslocoModule({
                    langs: { en: en },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
            declarations: [TestHostComponent],
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
            By.directive(BaseDialogComponent)
        ).componentInstance.cancelOnClick;

        jest.spyOn(baseDialogEmitterRef, 'emit');

        //Act
        fixture.detectChanges();
        const closeButton = fixture.debugElement.query(By.css('button'));
        closeButton.triggerEventHandler('click');

        //Assert
        expect(baseDialogEmitterRef.emit).toHaveBeenCalled();
    });
});
