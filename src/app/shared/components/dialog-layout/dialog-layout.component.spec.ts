import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogLayoutComponent } from './dialog-layout.component';
import { Component } from '@angular/core';
import { getTranslocoModule } from 'transloco-testing.module';
import { ButtonComponent } from '@components/button/button.component';
import { ButtonXVM } from '@components/button/button.model';
import { PageHeaderComponent } from '@components/page-header/page-header.component';
import { MatIcon } from '@interfaces/mat-icon.enum';

const en = { title: 'value' };

@Component({
    imports: [DialogLayoutComponent, ButtonComponent, PageHeaderComponent],
    template: `
        <app-dialog-layout>
            <app-page-header>
                <app-button actionGroup [vm]="button1"></app-button>
            </app-page-header>
            <app-button [vm]="button2"></app-button>
            <app-button [vm]="button3"></app-button>
            <div>Should be projected</div>
        </app-dialog-layout>
    `,
})
class TestHostComponent {
    button1: ButtonXVM<'withIcon'> = {
        variant: 'fill',
        icon: MatIcon.ADD,
    };
    button2: ButtonXVM<'withIcon'> = {
        variant: 'fill',
        icon: MatIcon.ADD,
    };
    button3: ButtonXVM<'withIcon'> = {
        variant: 'fill',
        icon: MatIcon.ADD,
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
