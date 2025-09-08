import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogLayoutComponent } from './dialog-layout.component';
import { Component, input } from '@angular/core';
import { DialogLayoutVM } from './dialog-layout.model';
import { getTranslocoModule } from 'transloco-testing.module';
import { MatIcon } from '@interfaces/mat-icon.enum';

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
        closeButtonXVM: {
            variant: 'fill',
            secondary: false,
            icon: MatIcon.CLOSE,
        },
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
});
