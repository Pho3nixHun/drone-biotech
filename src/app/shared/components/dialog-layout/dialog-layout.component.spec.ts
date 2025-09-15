import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogLayoutComponent } from './dialog-layout.component';
import { Component } from '@angular/core';
import { getTranslocoModule } from 'transloco-testing.module';
import { ButtonComponent } from '@components/button/button.component';
import { ButtonXVM } from '@components/button/button.model';

const en = { title: 'value' };

@Component({
    imports: [DialogLayoutComponent, ButtonComponent],
    template: `
        <app-dialog-layout>
            <app-button close [vm]="button1"></app-button>
            <app-button [vm]="button2"></app-button>
            <app-button [vm]="button3"></app-button>
            <div>Should be projected</div>
        </app-dialog-layout>
    `,
})
class TestHostComponent {
    button1: ButtonXVM = {
        variant: 'fill',
    };
    button2: ButtonXVM = {
        variant: 'fill',
    };
    button3: ButtonXVM = {
        variant: 'fill',
    };
}
describe('DialogLayoutComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let compiled: HTMLElement;

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
    it('should render the projected contents and the template correctly', () => {
        //Arrange

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });
});
