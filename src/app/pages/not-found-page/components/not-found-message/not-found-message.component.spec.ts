import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFoundMessageComponent } from './not-found-message.component';
import { Component } from '@angular/core';
import { NotFoundMessageVM } from './not-found-message.model';
import { getTranslocoModule } from 'transloco-testing.module';
import { provideRouter } from '@angular/router';

const enMock = {
    description: 'desc',
    text: 'txt',
    title: 'tit',
};

@Component({
    imports: [NotFoundMessageComponent],
    template: ` <app-not-found-message [vm]="vm"></app-not-found-message> `,
})
class TestHostComponent {
    public vm: NotFoundMessageVM = {
        descriptionKey: enMock.description,
        navItem: { textKey: enMock.text, routerLink: 'link' },
        titleKey: enMock.title,
    };
}

describe('NotFoundMessageComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let compiled: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                TestHostComponent,
                getTranslocoModule({
                    langs: { en: enMock },
                    translocoConfig: {
                        availableLangs: ['en'],
                        defaultLang: 'en',
                    },
                }),
            ],
            providers: [provideRouter([])],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        compiled = fixture.debugElement.nativeElement;
    });

    // Snapshot test
    it('should render the template when the VM is provided', () => {
        //Arrange

        //Act
        fixture.detectChanges();

        //Assert
        expect(compiled).toMatchSnapshot();
    });
});
