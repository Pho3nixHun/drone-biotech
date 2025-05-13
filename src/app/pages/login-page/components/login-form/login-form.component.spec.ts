import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';
import { Component, input } from '@angular/core';
import { LoginFormVM } from './login-form-vm.model';
import { getTranslocoModule } from 'transloco-testing.module';

const en = { description: 'desc', title: 'tit' };
@Component({
    imports: [LoginFormComponent],
    template: `
        <app-login-form [vm]="vm()">
            <div>Should not be projected</div>
            <p>Should be projected</p>
            <form>Should be projected</form>
        </app-login-form>
    `,
})
class TestHostComponent {
    public vm = input.required<LoginFormVM>();
}

describe('LoginFormComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let compiled: HTMLElement;

    const vm: LoginFormVM = {
        backgroundImageSrc: 'assets/phoenix.jpg',
        descriptionKey: en.description,
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

    //Snapshot testing
    it('should project the contents, render the template correctly when there is a VM provided', () => {
        //Arrange
        fixture.componentRef.setInput('vm', vm);

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });
});
